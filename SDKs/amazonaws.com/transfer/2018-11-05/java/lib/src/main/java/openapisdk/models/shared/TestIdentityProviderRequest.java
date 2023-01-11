package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestIdentityProviderRequest {
    @JsonProperty("ServerId")
    public String serverId;
    public TestIdentityProviderRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerProtocol")
    public ProtocolEnum serverProtocol;
    public TestIdentityProviderRequest withServerProtocol(ProtocolEnum serverProtocol) {
        this.serverProtocol = serverProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceIp")
    public String sourceIp;
    public TestIdentityProviderRequest withSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public TestIdentityProviderRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPassword")
    public String userPassword;
    public TestIdentityProviderRequest withUserPassword(String userPassword) {
        this.userPassword = userPassword;
        return this;
    }
}