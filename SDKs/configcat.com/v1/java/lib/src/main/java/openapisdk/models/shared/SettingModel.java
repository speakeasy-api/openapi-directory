package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SettingModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public SettingModel withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configName")
    public String configName;
    public SettingModel withConfigName(String configName) {
        this.configName = configName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationWarningAt")
    public OffsetDateTime expirationWarningAt;
    public SettingModel withExpirationWarningAt(OffsetDateTime expirationWarningAt) {
        this.expirationWarningAt = expirationWarningAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hint")
    public String hint;
    public SettingModel withHint(String hint) {
        this.hint = hint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SettingModel withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerUserEmail")
    public String ownerUserEmail;
    public SettingModel withOwnerUserEmail(String ownerUserEmail) {
        this.ownerUserEmail = ownerUserEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerUserFullName")
    public String ownerUserFullName;
    public SettingModel withOwnerUserFullName(String ownerUserFullName) {
        this.ownerUserFullName = ownerUserFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingId")
    public Integer settingId;
    public SettingModel withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingType")
    public SettingTypeEnum settingType;
    public SettingModel withSettingType(SettingTypeEnum settingType) {
        this.settingType = settingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagModel[] tags;
    public SettingModel withTags(TagModel[] tags) {
        this.tags = tags;
        return this;
    }
}