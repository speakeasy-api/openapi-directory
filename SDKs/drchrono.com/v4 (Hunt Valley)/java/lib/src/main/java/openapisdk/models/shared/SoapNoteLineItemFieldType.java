package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SoapNoteLineItemFieldType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_values")
    public String[] allowedValues;
    public SoapNoteLineItemFieldType withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public SoapNoteLineItemFieldType withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clinical_note_template")
    public String clinicalNoteTemplate;
    public SoapNoteLineItemFieldType withClinicalNoteTemplate(String clinicalNoteTemplate) {
        this.clinicalNoteTemplate = clinicalNoteTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public SoapNoteLineItemFieldType withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_type")
    public String dataType;
    public SoapNoteLineItemFieldType withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public SoapNoteLineItemFieldType withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SoapNoteLineItemFieldType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public SoapNoteLineItemFieldType withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}