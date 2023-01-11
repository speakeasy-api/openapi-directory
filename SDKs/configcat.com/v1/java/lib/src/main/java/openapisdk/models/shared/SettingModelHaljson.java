package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SettingModelHaljson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public SettingModelHaljsonEmbedded embedded;
    public SettingModelHaljson withEmbedded(SettingModelHaljsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingModelHaljsonLinks links;
    public SettingModelHaljson withLinks(SettingModelHaljsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public SettingModelHaljson withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configName")
    public String configName;
    public SettingModelHaljson withConfigName(String configName) {
        this.configName = configName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationWarningAt")
    public OffsetDateTime expirationWarningAt;
    public SettingModelHaljson withExpirationWarningAt(OffsetDateTime expirationWarningAt) {
        this.expirationWarningAt = expirationWarningAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hint")
    public String hint;
    public SettingModelHaljson withHint(String hint) {
        this.hint = hint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SettingModelHaljson withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingModelHaljson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerUserEmail")
    public String ownerUserEmail;
    public SettingModelHaljson withOwnerUserEmail(String ownerUserEmail) {
        this.ownerUserEmail = ownerUserEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerUserFullName")
    public String ownerUserFullName;
    public SettingModelHaljson withOwnerUserFullName(String ownerUserFullName) {
        this.ownerUserFullName = ownerUserFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingId")
    public Integer settingId;
    public SettingModelHaljson withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingType")
    public SettingTypeEnum settingType;
    public SettingModelHaljson withSettingType(SettingTypeEnum settingType) {
        this.settingType = settingType;
        return this;
    }
}