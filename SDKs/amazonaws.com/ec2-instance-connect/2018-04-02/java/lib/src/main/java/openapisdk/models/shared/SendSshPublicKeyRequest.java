package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendSshPublicKeyRequest {
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public SendSshPublicKeyRequest withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonProperty("InstanceId")
    public String instanceId;
    public SendSshPublicKeyRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonProperty("InstanceOSUser")
    public String instanceOSUser;
    public SendSshPublicKeyRequest withInstanceOsUser(String instanceOSUser) {
        this.instanceOSUser = instanceOSUser;
        return this;
    }
    @JsonProperty("SSHPublicKey")
    public String sshPublicKey;
    public SendSshPublicKeyRequest withSshPublicKey(String sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
}