package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public UpdateServerRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointDetails")
    public EndpointDetails endpointDetails;
    public UpdateServerRequest withEndpointDetails(EndpointDetails endpointDetails) {
        this.endpointDetails = endpointDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointType")
    public EndpointTypeEnum endpointType;
    public UpdateServerRequest withEndpointType(EndpointTypeEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostKey")
    public String hostKey;
    public UpdateServerRequest withHostKey(String hostKey) {
        this.hostKey = hostKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityProviderDetails")
    public IdentityProviderDetails identityProviderDetails;
    public UpdateServerRequest withIdentityProviderDetails(IdentityProviderDetails identityProviderDetails) {
        this.identityProviderDetails = identityProviderDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingRole")
    public String loggingRole;
    public UpdateServerRequest withLoggingRole(String loggingRole) {
        this.loggingRole = loggingRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtocolDetails")
    public ProtocolDetails protocolDetails;
    public UpdateServerRequest withProtocolDetails(ProtocolDetails protocolDetails) {
        this.protocolDetails = protocolDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocols")
    public ProtocolEnum[] protocols;
    public UpdateServerRequest withProtocols(ProtocolEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityPolicyName")
    public String securityPolicyName;
    public UpdateServerRequest withSecurityPolicyName(String securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public UpdateServerRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowDetails")
    public WorkflowDetails workflowDetails;
    public UpdateServerRequest withWorkflowDetails(WorkflowDetails workflowDetails) {
        this.workflowDetails = workflowDetails;
        return this;
    }
}