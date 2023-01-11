package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CandidateSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CandidateSearch withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CandidateSearch withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_sought")
    public String officeSought;
    public CandidateSearch withOfficeSought(String officeSought) {
        this.officeSought = officeSought;
        return this;
    }
}