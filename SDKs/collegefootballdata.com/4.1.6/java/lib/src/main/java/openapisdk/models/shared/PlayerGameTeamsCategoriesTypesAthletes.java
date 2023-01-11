package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerGameTeamsCategoriesTypesAthletes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PlayerGameTeamsCategoriesTypesAthletes withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlayerGameTeamsCategoriesTypesAthletes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stat")
    public String stat;
    public PlayerGameTeamsCategoriesTypesAthletes withStat(String stat) {
        this.stat = stat;
        return this;
    }
}