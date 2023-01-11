package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Setting
 * The current account setting for a resource.
**/
public class Setting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public SettingNameEnum name;
    public Setting withName(SettingNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalArn")
    public String principalArn;
    public Setting withPrincipalArn(String principalArn) {
        this.principalArn = principalArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Setting withValue(String value) {
        this.value = value;
        return this;
    }
}