package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRecordingConfigurationRequestBodyDestinationConfiguration
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
public class CreateRecordingConfigurationRequestBodyDestinationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3")
    public openapisdk.models.shared.S3DestinationConfiguration s3;
    public CreateRecordingConfigurationRequestBodyDestinationConfiguration withS3(openapisdk.models.shared.S3DestinationConfiguration s3) {
        this.s3 = s3;
        return this;
    }
}