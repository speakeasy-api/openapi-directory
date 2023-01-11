package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFieldRequestInput
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 * 
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
**/
public class CustomFieldRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_code")
    public String currencyCode;
    public CustomFieldRequestInput withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_label")
    public String customLabel;
    public CustomFieldRequestInput withCustomLabel(String customLabel) {
        this.customLabel = customLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_label_position")
    public CustomFieldRequestCustomLabelPositionEnum customLabelPosition;
    public CustomFieldRequestInput withCustomLabelPosition(CustomFieldRequestCustomLabelPositionEnum customLabelPosition) {
        this.customLabelPosition = customLabelPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomFieldRequestInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CustomFieldRequestInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enum_options")
    public EnumOptionInput[] enumOptions;
    public CustomFieldRequestInput withEnumOptions(EnumOptionInput[] enumOptions) {
        this.enumOptions = enumOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public CustomFieldRequestFormatEnum format;
    public CustomFieldRequestInput withFormat(CustomFieldRequestFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_notifications_enabled")
    public Boolean hasNotificationsEnabled;
    public CustomFieldRequestInput withHasNotificationsEnabled(Boolean hasNotificationsEnabled) {
        this.hasNotificationsEnabled = hasNotificationsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomFieldRequestInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_value")
    public Double numberValue;
    public CustomFieldRequestInput withNumberValue(Double numberValue) {
        this.numberValue = numberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Long precision;
    public CustomFieldRequestInput withPrecision(Long precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public CustomFieldRequestResourceSubtypeEnum resourceSubtype;
    public CustomFieldRequestInput withResourceSubtype(CustomFieldRequestResourceSubtypeEnum resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_value")
    public String textValue;
    public CustomFieldRequestInput withTextValue(String textValue) {
        this.textValue = textValue;
        return this;
    }
    @JsonProperty("workspace")
    public String workspace;
    public CustomFieldRequestInput withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}