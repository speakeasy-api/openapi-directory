package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketNotificationConfiguration
 * The notification configuration for the S3 bucket.
**/
public class AwsS3BucketNotificationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configurations")
    public AwsS3BucketNotificationConfigurationDetail[] configurations;
    public AwsS3BucketNotificationConfiguration withConfigurations(AwsS3BucketNotificationConfigurationDetail[] configurations) {
        this.configurations = configurations;
        return this;
    }
}