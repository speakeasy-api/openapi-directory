package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SettingDataModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public SettingDataModel withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorEmail")
    public String creatorEmail;
    public SettingDataModel withCreatorEmail(String creatorEmail) {
        this.creatorEmail = creatorEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorFullName")
    public String creatorFullName;
    public SettingDataModel withCreatorFullName(String creatorFullName) {
        this.creatorFullName = creatorFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationWarningAt")
    public OffsetDateTime expirationWarningAt;
    public SettingDataModel withExpirationWarningAt(OffsetDateTime expirationWarningAt) {
        this.expirationWarningAt = expirationWarningAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hint")
    public String hint;
    public SettingDataModel withHint(String hint) {
        this.hint = hint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isWatching")
    public Boolean isWatching;
    public SettingDataModel withIsWatching(Boolean isWatching) {
        this.isWatching = isWatching;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SettingDataModel withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingDataModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerEmail")
    public String ownerEmail;
    public SettingDataModel withOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerFullName")
    public String ownerFullName;
    public SettingDataModel withOwnerFullName(String ownerFullName) {
        this.ownerFullName = ownerFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingId")
    public Integer settingId;
    public SettingDataModel withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingType")
    public SettingTypeEnum settingType;
    public SettingDataModel withSettingType(SettingTypeEnum settingType) {
        this.settingType = settingType;
        return this;
    }
}