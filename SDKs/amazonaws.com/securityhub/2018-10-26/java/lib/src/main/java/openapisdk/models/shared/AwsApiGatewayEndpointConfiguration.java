package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsApiGatewayEndpointConfiguration
 * Contains information about the endpoints for the API.
**/
public class AwsApiGatewayEndpointConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Types")
    public String[] types;
    public AwsApiGatewayEndpointConfiguration withTypes(String[] types) {
        this.types = types;
        return this;
    }
}