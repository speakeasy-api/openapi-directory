package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SshPublicKey
 * Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.
**/
public class SshPublicKey {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("DateImported")
    public OffsetDateTime dateImported;
    public SshPublicKey withDateImported(OffsetDateTime dateImported) {
        this.dateImported = dateImported;
        return this;
    }
    @JsonProperty("SshPublicKeyBody")
    public String sshPublicKeyBody;
    public SshPublicKey withSshPublicKeyBody(String sshPublicKeyBody) {
        this.sshPublicKeyBody = sshPublicKeyBody;
        return this;
    }
    @JsonProperty("SshPublicKeyId")
    public String sshPublicKeyId;
    public SshPublicKey withSshPublicKeyId(String sshPublicKeyId) {
        this.sshPublicKeyId = sshPublicKeyId;
        return this;
    }
}