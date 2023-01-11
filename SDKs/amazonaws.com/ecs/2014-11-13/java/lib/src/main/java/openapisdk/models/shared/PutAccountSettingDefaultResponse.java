package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountSettingDefaultResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setting")
    public Setting setting;
    public PutAccountSettingDefaultResponse withSetting(Setting setting) {
        this.setting = setting;
        return this;
    }
}