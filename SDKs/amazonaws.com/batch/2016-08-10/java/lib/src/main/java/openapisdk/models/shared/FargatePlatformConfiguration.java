package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FargatePlatformConfiguration
 * The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter.
**/
public class FargatePlatformConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformVersion")
    public String platformVersion;
    public FargatePlatformConfiguration withPlatformVersion(String platformVersion) {
        this.platformVersion = platformVersion;
        return this;
    }
}