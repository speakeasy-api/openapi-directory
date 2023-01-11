package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SettingValueModelHaljsonEmbeddedSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public SettingValueModelHaljsonEmbeddedSetting withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorEmail")
    public String creatorEmail;
    public SettingValueModelHaljsonEmbeddedSetting withCreatorEmail(String creatorEmail) {
        this.creatorEmail = creatorEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorFullName")
    public String creatorFullName;
    public SettingValueModelHaljsonEmbeddedSetting withCreatorFullName(String creatorFullName) {
        this.creatorFullName = creatorFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationWarningAt")
    public OffsetDateTime expirationWarningAt;
    public SettingValueModelHaljsonEmbeddedSetting withExpirationWarningAt(OffsetDateTime expirationWarningAt) {
        this.expirationWarningAt = expirationWarningAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hint")
    public String hint;
    public SettingValueModelHaljsonEmbeddedSetting withHint(String hint) {
        this.hint = hint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isWatching")
    public Boolean isWatching;
    public SettingValueModelHaljsonEmbeddedSetting withIsWatching(Boolean isWatching) {
        this.isWatching = isWatching;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SettingValueModelHaljsonEmbeddedSetting withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingValueModelHaljsonEmbeddedSetting withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerEmail")
    public String ownerEmail;
    public SettingValueModelHaljsonEmbeddedSetting withOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerFullName")
    public String ownerFullName;
    public SettingValueModelHaljsonEmbeddedSetting withOwnerFullName(String ownerFullName) {
        this.ownerFullName = ownerFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingId")
    public Integer settingId;
    public SettingValueModelHaljsonEmbeddedSetting withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingType")
    public SettingTypeEnum settingType;
    public SettingValueModelHaljsonEmbeddedSetting withSettingType(SettingTypeEnum settingType) {
        this.settingType = settingType;
        return this;
    }
}