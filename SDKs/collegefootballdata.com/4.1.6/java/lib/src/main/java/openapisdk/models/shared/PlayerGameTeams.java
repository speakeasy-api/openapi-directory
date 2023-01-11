package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerGameTeams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public PlayerGameTeamsCategories[] categories;
    public PlayerGameTeams withCategories(PlayerGameTeamsCategories[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeAway")
    public Boolean homeAway;
    public PlayerGameTeams withHomeAway(Boolean homeAway) {
        this.homeAway = homeAway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public Long points;
    public PlayerGameTeams withPoints(Long points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public PlayerGameTeamsSchool school;
    public PlayerGameTeams withSchool(PlayerGameTeamsSchool school) {
        this.school = school;
        return this;
    }
}