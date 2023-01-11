package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SettingValueModelHaljson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public SettingValueModelHaljsonEmbedded embedded;
    public SettingValueModelHaljson withEmbedded(SettingValueModelHaljsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingValueModelHaljsonLinks links;
    public SettingValueModelHaljson withLinks(SettingValueModelHaljsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdaterUserEmail")
    public String lastUpdaterUserEmail;
    public SettingValueModelHaljson withLastUpdaterUserEmail(String lastUpdaterUserEmail) {
        this.lastUpdaterUserEmail = lastUpdaterUserEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdaterUserFullName")
    public String lastUpdaterUserFullName;
    public SettingValueModelHaljson withLastUpdaterUserFullName(String lastUpdaterUserFullName) {
        this.lastUpdaterUserFullName = lastUpdaterUserFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public SettingValueModelHaljson withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolloutPercentageItems")
    public RolloutPercentageItemModel[] rolloutPercentageItems;
    public SettingValueModelHaljson withRolloutPercentageItems(RolloutPercentageItemModel[] rolloutPercentageItems) {
        this.rolloutPercentageItems = rolloutPercentageItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolloutRules")
    public RolloutRuleModel[] rolloutRules;
    public SettingValueModelHaljson withRolloutRules(RolloutRuleModel[] rolloutRules) {
        this.rolloutRules = rolloutRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public SettingValueModelHaljson withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public SettingValueModelHaljson withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}