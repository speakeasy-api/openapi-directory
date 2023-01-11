package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFieldSettingResponseCustomField
 * The custom field that is applied to the `parent`.
**/
public class CustomFieldSettingResponseCustomField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public UserCompact createdBy;
    public CustomFieldSettingResponseCustomField withCreatedBy(UserCompact createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_code")
    public String currencyCode;
    public CustomFieldSettingResponseCustomField withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_label")
    public String customLabel;
    public CustomFieldSettingResponseCustomField withCustomLabel(String customLabel) {
        this.customLabel = customLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_label_position")
    public CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum customLabelPosition;
    public CustomFieldSettingResponseCustomField withCustomLabelPosition(CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum customLabelPosition) {
        this.customLabelPosition = customLabelPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomFieldSettingResponseCustomField withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_value")
    public String displayValue;
    public CustomFieldSettingResponseCustomField withDisplayValue(String displayValue) {
        this.displayValue = displayValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CustomFieldSettingResponseCustomField withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enum_options")
    public EnumOption[] enumOptions;
    public CustomFieldSettingResponseCustomField withEnumOptions(EnumOption[] enumOptions) {
        this.enumOptions = enumOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enum_value")
    public CustomFieldSettingResponseCustomFieldEnumValue enumValue;
    public CustomFieldSettingResponseCustomField withEnumValue(CustomFieldSettingResponseCustomFieldEnumValue enumValue) {
        this.enumValue = enumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public CustomFieldSettingResponseCustomFieldFormatEnum format;
    public CustomFieldSettingResponseCustomField withFormat(CustomFieldSettingResponseCustomFieldFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public CustomFieldSettingResponseCustomField withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_notifications_enabled")
    public Boolean hasNotificationsEnabled;
    public CustomFieldSettingResponseCustomField withHasNotificationsEnabled(Boolean hasNotificationsEnabled) {
        this.hasNotificationsEnabled = hasNotificationsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_global_to_workspace")
    public Boolean isGlobalToWorkspace;
    public CustomFieldSettingResponseCustomField withIsGlobalToWorkspace(Boolean isGlobalToWorkspace) {
        this.isGlobalToWorkspace = isGlobalToWorkspace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multi_enum_values")
    public EnumOption[] multiEnumValues;
    public CustomFieldSettingResponseCustomField withMultiEnumValues(EnumOption[] multiEnumValues) {
        this.multiEnumValues = multiEnumValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomFieldSettingResponseCustomField withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_value")
    public Double numberValue;
    public CustomFieldSettingResponseCustomField withNumberValue(Double numberValue) {
        this.numberValue = numberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Long precision;
    public CustomFieldSettingResponseCustomField withPrecision(Long precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public CustomFieldSettingResponseCustomFieldResourceSubtypeEnum resourceSubtype;
    public CustomFieldSettingResponseCustomField withResourceSubtype(CustomFieldSettingResponseCustomFieldResourceSubtypeEnum resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public CustomFieldSettingResponseCustomField withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_value")
    public String textValue;
    public CustomFieldSettingResponseCustomField withTextValue(String textValue) {
        this.textValue = textValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CustomFieldSettingResponseCustomFieldTypeEnum type;
    public CustomFieldSettingResponseCustomField withType(CustomFieldSettingResponseCustomFieldTypeEnum type) {
        this.type = type;
        return this;
    }
}