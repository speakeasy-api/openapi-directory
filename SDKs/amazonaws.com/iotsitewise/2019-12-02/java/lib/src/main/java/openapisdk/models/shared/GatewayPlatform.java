package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GatewayPlatform
 * Contains a gateway's platform information.
**/
public class GatewayPlatform {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greengrass")
    public Greengrass greengrass;
    public GatewayPlatform withGreengrass(Greengrass greengrass) {
        this.greengrass = greengrass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greengrassV2")
    public GreengrassV2 greengrassV2;
    public GatewayPlatform withGreengrassV2(GreengrassV2 greengrassV2) {
        this.greengrassV2 = greengrassV2;
        return this;
    }
}