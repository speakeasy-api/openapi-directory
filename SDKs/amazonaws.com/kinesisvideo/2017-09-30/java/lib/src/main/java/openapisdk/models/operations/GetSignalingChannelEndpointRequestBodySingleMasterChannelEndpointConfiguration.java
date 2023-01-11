package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration
 * An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. 
**/
public class GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocols")
    public openapisdk.models.shared.ChannelProtocolEnum[] protocols;
    public GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration withProtocols(openapisdk.models.shared.ChannelProtocolEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public openapisdk.models.shared.ChannelRoleEnum role;
    public GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration withRole(openapisdk.models.shared.ChannelRoleEnum role) {
        this.role = role;
        return this;
    }
}