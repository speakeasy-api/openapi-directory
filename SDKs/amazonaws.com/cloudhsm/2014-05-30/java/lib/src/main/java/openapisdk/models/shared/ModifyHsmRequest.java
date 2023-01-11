package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyHsmRequest
 * Contains the inputs for the <a>ModifyHsm</a> operation.
**/
public class ModifyHsmRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EniIp")
    public String eniIp;
    public ModifyHsmRequest withEniIp(String eniIp) {
        this.eniIp = eniIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalId")
    public String externalId;
    public ModifyHsmRequest withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("HsmArn")
    public String hsmArn;
    public ModifyHsmRequest withHsmArn(String hsmArn) {
        this.hsmArn = hsmArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public ModifyHsmRequest withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public ModifyHsmRequest withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyslogIp")
    public String syslogIp;
    public ModifyHsmRequest withSyslogIp(String syslogIp) {
        this.syslogIp = syslogIp;
        return this;
    }
}