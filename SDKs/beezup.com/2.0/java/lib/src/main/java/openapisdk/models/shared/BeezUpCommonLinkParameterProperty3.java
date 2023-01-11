package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BeezUpCommonLinkParameterProperty3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BeezUpCommonLinkParameterProperty3 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public BeezUpCommonLinkParameterProperty3 withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lovLink")
    public BeezUpCommonLovLink3 lovLink;
    public BeezUpCommonLinkParameterProperty3 withLovLink(BeezUpCommonLovLink3 lovLink) {
        this.lovLink = lovLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lovRequired")
    public Boolean lovRequired;
    public BeezUpCommonLinkParameterProperty3 withLovRequired(Boolean lovRequired) {
        this.lovRequired = lovRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public BeezUpCommonLinkParameterProperty3 withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public BeezUpCommonLinkParameterProperty3 withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BeezUpCommonParameterTypeEnum type;
    public BeezUpCommonLinkParameterProperty3 withType(BeezUpCommonParameterTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public BeezUpCommonLinkParameterProperty3 withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}