package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3RecordingDetails
 * Details about an S3 recording <code>Config</code> used in a contact.
**/
public class S3RecordingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketArn")
    public String bucketArn;
    public S3RecordingDetails withBucketArn(String bucketArn) {
        this.bucketArn = bucketArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyTemplate")
    public String keyTemplate;
    public S3RecordingDetails withKeyTemplate(String keyTemplate) {
        this.keyTemplate = keyTemplate;
        return this;
    }
}