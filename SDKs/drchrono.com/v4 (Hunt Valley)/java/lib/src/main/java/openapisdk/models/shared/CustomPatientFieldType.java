package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomPatientFieldType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_values")
    public String allowedValues;
    public CustomPatientFieldType withAllowedValues(String allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public CustomPatientFieldType withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomPatientFieldType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public CustomPatientFieldType withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CustomPatientFieldType withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CustomPatientFieldType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_name")
    public String templateName;
    public CustomPatientFieldType withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}