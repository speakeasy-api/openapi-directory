package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSettingModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hint")
    public String hint;
    public CreateSettingModel withHint(String hint) {
        this.hint = hint;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public CreateSettingModel withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateSettingModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("settingType")
    public SettingTypeEnum settingType;
    public CreateSettingModel withSettingType(SettingTypeEnum settingType) {
        this.settingType = settingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Long[] tags;
    public CreateSettingModel withTags(Long[] tags) {
        this.tags = tags;
        return this;
    }
}