package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountSettingRequest {
    @JsonProperty("name")
    public SettingNameEnum name;
    public PutAccountSettingRequest withName(SettingNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalArn")
    public String principalArn;
    public PutAccountSettingRequest withPrincipalArn(String principalArn) {
        this.principalArn = principalArn;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public PutAccountSettingRequest withValue(String value) {
        this.value = value;
        return this;
    }
}