package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQualificationScoreResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Qualification")
    public Qualification qualification;
    public GetQualificationScoreResponse withQualification(Qualification qualification) {
        this.qualification = qualification;
        return this;
    }
}