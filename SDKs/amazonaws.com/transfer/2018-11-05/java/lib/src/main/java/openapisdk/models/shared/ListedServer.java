package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListedServer
 * Returns properties of a file transfer protocol-enabled server that was specified.
**/
public class ListedServer {
    @JsonProperty("Arn")
    public String arn;
    public ListedServer withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public DomainEnum domain;
    public ListedServer withDomain(DomainEnum domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointType")
    public EndpointTypeEnum endpointType;
    public ListedServer withEndpointType(EndpointTypeEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityProviderType")
    public IdentityProviderTypeEnum identityProviderType;
    public ListedServer withIdentityProviderType(IdentityProviderTypeEnum identityProviderType) {
        this.identityProviderType = identityProviderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingRole")
    public String loggingRole;
    public ListedServer withLoggingRole(String loggingRole) {
        this.loggingRole = loggingRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerId")
    public String serverId;
    public ListedServer withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public StateEnum state;
    public ListedServer withState(StateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserCount")
    public Long userCount;
    public ListedServer withUserCount(Long userCount) {
        this.userCount = userCount;
        return this;
    }
}