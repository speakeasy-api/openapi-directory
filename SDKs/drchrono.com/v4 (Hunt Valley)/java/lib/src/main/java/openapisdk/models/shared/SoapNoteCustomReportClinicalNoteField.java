package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoapNoteCustomReportClinicalNoteField
 * Array of field objects
**/
public class SoapNoteCustomReportClinicalNoteField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_values")
    public String[] allowedValues;
    public SoapNoteCustomReportClinicalNoteField withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public SoapNoteCustomReportClinicalNoteField withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clinical_note_template")
    public Long clinicalNoteTemplate;
    public SoapNoteCustomReportClinicalNoteField withClinicalNoteTemplate(Long clinicalNoteTemplate) {
        this.clinicalNoteTemplate = clinicalNoteTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_type")
    public String dataType;
    public SoapNoteCustomReportClinicalNoteField withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SoapNoteCustomReportClinicalNoteField withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public SoapNoteCustomReportClinicalNoteField withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}