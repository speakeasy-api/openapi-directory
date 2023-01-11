package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendSerialConsoleSshPublicKeyRequest {
    @JsonProperty("InstanceId")
    public String instanceId;
    public SendSerialConsoleSshPublicKeyRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonProperty("SSHPublicKey")
    public String sshPublicKey;
    public SendSerialConsoleSshPublicKeyRequest withSshPublicKey(String sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SerialPort")
    public Long serialPort;
    public SendSerialConsoleSshPublicKeyRequest withSerialPort(Long serialPort) {
        this.serialPort = serialPort;
        return this;
    }
}