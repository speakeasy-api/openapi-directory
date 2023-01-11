package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFieldResponse
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 * 
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
**/
public class CustomFieldResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public UserCompact createdBy;
    public CustomFieldResponse withCreatedBy(UserCompact createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_code")
    public String currencyCode;
    public CustomFieldResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_label")
    public String customLabel;
    public CustomFieldResponse withCustomLabel(String customLabel) {
        this.customLabel = customLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_label_position")
    public CustomFieldResponseCustomLabelPositionEnum customLabelPosition;
    public CustomFieldResponse withCustomLabelPosition(CustomFieldResponseCustomLabelPositionEnum customLabelPosition) {
        this.customLabelPosition = customLabelPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomFieldResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_value")
    public String displayValue;
    public CustomFieldResponse withDisplayValue(String displayValue) {
        this.displayValue = displayValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CustomFieldResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enum_options")
    public EnumOption[] enumOptions;
    public CustomFieldResponse withEnumOptions(EnumOption[] enumOptions) {
        this.enumOptions = enumOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enum_value")
    public CustomFieldResponseEnumValue enumValue;
    public CustomFieldResponse withEnumValue(CustomFieldResponseEnumValue enumValue) {
        this.enumValue = enumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public CustomFieldResponseFormatEnum format;
    public CustomFieldResponse withFormat(CustomFieldResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public CustomFieldResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_notifications_enabled")
    public Boolean hasNotificationsEnabled;
    public CustomFieldResponse withHasNotificationsEnabled(Boolean hasNotificationsEnabled) {
        this.hasNotificationsEnabled = hasNotificationsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_global_to_workspace")
    public Boolean isGlobalToWorkspace;
    public CustomFieldResponse withIsGlobalToWorkspace(Boolean isGlobalToWorkspace) {
        this.isGlobalToWorkspace = isGlobalToWorkspace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multi_enum_values")
    public EnumOption[] multiEnumValues;
    public CustomFieldResponse withMultiEnumValues(EnumOption[] multiEnumValues) {
        this.multiEnumValues = multiEnumValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomFieldResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_value")
    public Double numberValue;
    public CustomFieldResponse withNumberValue(Double numberValue) {
        this.numberValue = numberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Long precision;
    public CustomFieldResponse withPrecision(Long precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public CustomFieldResponseResourceSubtypeEnum resourceSubtype;
    public CustomFieldResponse withResourceSubtype(CustomFieldResponseResourceSubtypeEnum resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public CustomFieldResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_value")
    public String textValue;
    public CustomFieldResponse withTextValue(String textValue) {
        this.textValue = textValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CustomFieldResponseTypeEnum type;
    public CustomFieldResponse withType(CustomFieldResponseTypeEnum type) {
        this.type = type;
        return this;
    }
}