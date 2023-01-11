package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities withType(String type) {
        this.type = type;
        return this;
    }
}