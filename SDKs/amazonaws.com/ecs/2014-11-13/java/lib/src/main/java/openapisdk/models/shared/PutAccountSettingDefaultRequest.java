package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutAccountSettingDefaultRequest {
    @JsonProperty("name")
    public SettingNameEnum name;
    public PutAccountSettingDefaultRequest withName(SettingNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public PutAccountSettingDefaultRequest withValue(String value) {
        this.value = value;
        return this;
    }
}