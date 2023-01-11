package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcGatewayRouteMetadata
 * An object representing the metadata of the gateway route.
**/
public class GrpcGatewayRouteMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invert")
    public Boolean invert;
    public GrpcGatewayRouteMetadata withInvert(Boolean invert) {
        this.invert = invert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public GrpcMetadataMatchMethod match;
    public GrpcGatewayRouteMetadata withMatch(GrpcMetadataMatchMethod match) {
        this.match = match;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GrpcGatewayRouteMetadata withName(String name) {
        this.name = name;
        return this;
    }
}