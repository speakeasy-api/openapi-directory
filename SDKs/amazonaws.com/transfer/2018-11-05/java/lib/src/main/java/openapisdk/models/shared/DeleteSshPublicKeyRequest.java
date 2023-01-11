package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSshPublicKeyRequest {
    @JsonProperty("ServerId")
    public String serverId;
    public DeleteSshPublicKeyRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonProperty("SshPublicKeyId")
    public String sshPublicKeyId;
    public DeleteSshPublicKeyRequest withSshPublicKeyId(String sshPublicKeyId) {
        this.sshPublicKeyId = sshPublicKeyId;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public DeleteSshPublicKeyRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}