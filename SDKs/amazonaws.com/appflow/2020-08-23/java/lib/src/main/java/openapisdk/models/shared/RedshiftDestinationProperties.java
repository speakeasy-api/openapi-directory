package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedshiftDestinationProperties
 *  The properties that are applied when Amazon Redshift is being used as a destination. 
**/
public class RedshiftDestinationProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPrefix")
    public String bucketPrefix;
    public RedshiftDestinationProperties withBucketPrefix(String bucketPrefix) {
        this.bucketPrefix = bucketPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorHandlingConfig")
    public ErrorHandlingConfig errorHandlingConfig;
    public RedshiftDestinationProperties withErrorHandlingConfig(ErrorHandlingConfig errorHandlingConfig) {
        this.errorHandlingConfig = errorHandlingConfig;
        return this;
    }
    @JsonProperty("intermediateBucketName")
    public String intermediateBucketName;
    public RedshiftDestinationProperties withIntermediateBucketName(String intermediateBucketName) {
        this.intermediateBucketName = intermediateBucketName;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public RedshiftDestinationProperties withObject(String object) {
        this.object = object;
        return this;
    }
}