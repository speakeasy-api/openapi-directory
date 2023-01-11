package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormFieldSettings
 * Advanced field settings
**/
public class FormFieldSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FormFieldSettings withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRequired")
    public Boolean isRequired;
    public FormFieldSettings withIsRequired(Boolean isRequired) {
        this.isRequired = isRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senderEmail")
    public Boolean senderEmail;
    public FormFieldSettings withSenderEmail(Boolean senderEmail) {
        this.senderEmail = senderEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAsFolderName")
    public Boolean useAsFolderName;
    public FormFieldSettings withUseAsFolderName(Boolean useAsFolderName) {
        this.useAsFolderName = useAsFolderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Float width;
    public FormFieldSettings withWidth(Float width) {
        this.width = width;
        return this;
    }
}