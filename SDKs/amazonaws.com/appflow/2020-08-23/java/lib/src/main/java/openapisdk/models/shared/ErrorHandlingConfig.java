package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorHandlingConfig
 *  The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. 
**/
public class ErrorHandlingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketName")
    public String bucketName;
    public ErrorHandlingConfig withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPrefix")
    public String bucketPrefix;
    public ErrorHandlingConfig withBucketPrefix(String bucketPrefix) {
        this.bucketPrefix = bucketPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failOnFirstDestinationError")
    public Boolean failOnFirstDestinationError;
    public ErrorHandlingConfig withFailOnFirstDestinationError(Boolean failOnFirstDestinationError) {
        this.failOnFirstDestinationError = failOnFirstDestinationError;
        return this;
    }
}