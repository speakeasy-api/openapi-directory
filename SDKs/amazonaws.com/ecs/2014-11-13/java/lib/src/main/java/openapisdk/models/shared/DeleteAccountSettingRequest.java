package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAccountSettingRequest {
    @JsonProperty("name")
    public SettingNameEnum name;
    public DeleteAccountSettingRequest withName(SettingNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalArn")
    public String principalArn;
    public DeleteAccountSettingRequest withPrincipalArn(String principalArn) {
        this.principalArn = principalArn;
        return this;
    }
}