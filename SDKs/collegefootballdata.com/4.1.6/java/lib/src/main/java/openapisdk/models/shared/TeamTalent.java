package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamTalent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public String school;
    public TeamTalent withSchool(String school) {
        this.school = school;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("talent")
    public Double talent;
    public TeamTalent withTalent(Double talent) {
        this.talent = talent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public TeamTalent withYear(Long year) {
        this.year = year;
        return this;
    }
}