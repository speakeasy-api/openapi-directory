package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiVersionRequestBodyVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateApiVersionRequestBodyVersion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public CreateApiVersionRequestBodyVersionSource source;
    public CreateApiVersionRequestBodyVersion withSource(CreateApiVersionRequestBodyVersionSource source) {
        this.source = source;
        return this;
    }
}