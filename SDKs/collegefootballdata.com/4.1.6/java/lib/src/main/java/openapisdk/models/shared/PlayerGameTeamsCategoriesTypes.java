package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerGameTeamsCategoriesTypes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("athletes")
    public PlayerGameTeamsCategoriesTypesAthletes[] athletes;
    public PlayerGameTeamsCategoriesTypes withAthletes(PlayerGameTeamsCategoriesTypesAthletes[] athletes) {
        this.athletes = athletes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlayerGameTeamsCategoriesTypes withName(String name) {
        this.name = name;
        return this;
    }
}