package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Reference
 * <p>Amazon S3 object representing the updated message content, in MIME format.</p> <note> <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> </note>
**/
public class S3Reference {
    @JsonProperty("bucket")
    public String bucket;
    public S3Reference withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public S3Reference withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public S3Reference withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}