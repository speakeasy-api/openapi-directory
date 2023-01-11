package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in")
    public String in;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters withIn(String in) {
        this.in = in;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema schema;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters withSchema(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema schema) {
        this.schema = schema;
        return this;
    }
}