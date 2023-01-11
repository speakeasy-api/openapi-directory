package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateServerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public CreateServerRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public DomainEnum domain;
    public CreateServerRequest withDomain(DomainEnum domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointDetails")
    public EndpointDetails endpointDetails;
    public CreateServerRequest withEndpointDetails(EndpointDetails endpointDetails) {
        this.endpointDetails = endpointDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointType")
    public EndpointTypeEnum endpointType;
    public CreateServerRequest withEndpointType(EndpointTypeEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostKey")
    public String hostKey;
    public CreateServerRequest withHostKey(String hostKey) {
        this.hostKey = hostKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityProviderDetails")
    public IdentityProviderDetails identityProviderDetails;
    public CreateServerRequest withIdentityProviderDetails(IdentityProviderDetails identityProviderDetails) {
        this.identityProviderDetails = identityProviderDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityProviderType")
    public IdentityProviderTypeEnum identityProviderType;
    public CreateServerRequest withIdentityProviderType(IdentityProviderTypeEnum identityProviderType) {
        this.identityProviderType = identityProviderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingRole")
    public String loggingRole;
    public CreateServerRequest withLoggingRole(String loggingRole) {
        this.loggingRole = loggingRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocols")
    public ProtocolEnum[] protocols;
    public CreateServerRequest withProtocols(ProtocolEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityPolicyName")
    public String securityPolicyName;
    public CreateServerRequest withSecurityPolicyName(String securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateServerRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowDetails")
    public WorkflowDetails workflowDetails;
    public CreateServerRequest withWorkflowDetails(WorkflowDetails workflowDetails) {
        this.workflowDetails = workflowDetails;
        return this;
    }
}