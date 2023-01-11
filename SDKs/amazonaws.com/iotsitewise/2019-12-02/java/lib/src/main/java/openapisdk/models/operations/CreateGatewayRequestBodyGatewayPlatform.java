package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateGatewayRequestBodyGatewayPlatform
 * Contains a gateway's platform information.
**/
public class CreateGatewayRequestBodyGatewayPlatform {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greengrass")
    public openapisdk.models.shared.Greengrass greengrass;
    public CreateGatewayRequestBodyGatewayPlatform withGreengrass(openapisdk.models.shared.Greengrass greengrass) {
        this.greengrass = greengrass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greengrassV2")
    public openapisdk.models.shared.GreengrassV2 greengrassV2;
    public CreateGatewayRequestBodyGatewayPlatform withGreengrassV2(openapisdk.models.shared.GreengrassV2 greengrassV2) {
        this.greengrassV2 = greengrassV2;
        return this;
    }
}