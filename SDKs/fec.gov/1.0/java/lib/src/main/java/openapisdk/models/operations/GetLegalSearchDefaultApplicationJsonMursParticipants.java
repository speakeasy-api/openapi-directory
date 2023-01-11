package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonMursParticipants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citations")
    public java.util.Map<String, Object> citations;
    public GetLegalSearchDefaultApplicationJsonMursParticipants withCitations(java.util.Map<String, Object> citations) {
        this.citations = citations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonMursParticipants withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public GetLegalSearchDefaultApplicationJsonMursParticipants withRole(String role) {
        this.role = role;
        return this;
    }
}