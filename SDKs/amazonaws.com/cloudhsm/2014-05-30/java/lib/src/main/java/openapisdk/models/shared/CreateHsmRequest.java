package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateHsmRequest
 * Contains the inputs for the <code>CreateHsm</code> operation.
**/
public class CreateHsmRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateHsmRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EniIp")
    public String eniIp;
    public CreateHsmRequest withEniIp(String eniIp) {
        this.eniIp = eniIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalId")
    public String externalId;
    public CreateHsmRequest withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public CreateHsmRequest withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonProperty("SshKey")
    public String sshKey;
    public CreateHsmRequest withSshKey(String sshKey) {
        this.sshKey = sshKey;
        return this;
    }
    @JsonProperty("SubnetId")
    public String subnetId;
    public CreateHsmRequest withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonProperty("SubscriptionType")
    public SubscriptionTypeEnum subscriptionType;
    public CreateHsmRequest withSubscriptionType(SubscriptionTypeEnum subscriptionType) {
        this.subscriptionType = subscriptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyslogIp")
    public String syslogIp;
    public CreateHsmRequest withSyslogIp(String syslogIp) {
        this.syslogIp = syslogIp;
        return this;
    }
}