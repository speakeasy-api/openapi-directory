package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * InstanceAccessDetails
 * The parameters for gaining temporary access to one of your Amazon Lightsail instances.
**/
public class InstanceAccessDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certKey")
    public String certKey;
    public InstanceAccessDetails withCertKey(String certKey) {
        this.certKey = certKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiresAt")
    public OffsetDateTime expiresAt;
    public InstanceAccessDetails withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostKeys")
    public HostKeyAttributes[] hostKeys;
    public InstanceAccessDetails withHostKeys(HostKeyAttributes[] hostKeys) {
        this.hostKeys = hostKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceName")
    public String instanceName;
    public InstanceAccessDetails withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public InstanceAccessDetails withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public InstanceAccessDetails withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordData")
    public PasswordData passwordData;
    public InstanceAccessDetails withPasswordData(PasswordData passwordData) {
        this.passwordData = passwordData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKey")
    public String privateKey;
    public InstanceAccessDetails withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public InstanceAccessProtocolEnum protocol;
    public InstanceAccessDetails withProtocol(InstanceAccessProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public InstanceAccessDetails withUsername(String username) {
        this.username = username;
        return this;
    }
}