package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationConfiguration
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
public class DestinationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3")
    public S3DestinationConfiguration s3;
    public DestinationConfiguration withS3(S3DestinationConfiguration s3) {
        this.s3 = s3;
        return this;
    }
}