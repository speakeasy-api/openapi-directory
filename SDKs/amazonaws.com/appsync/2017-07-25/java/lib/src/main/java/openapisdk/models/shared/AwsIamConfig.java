package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamConfig
 * The Identity and Access Management configuration.
**/
public class AwsIamConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingRegion")
    public String signingRegion;
    public AwsIamConfig withSigningRegion(String signingRegion) {
        this.signingRegion = signingRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingServiceName")
    public String signingServiceName;
    public AwsIamConfig withSigningServiceName(String signingServiceName) {
        this.signingServiceName = signingServiceName;
        return this;
    }
}