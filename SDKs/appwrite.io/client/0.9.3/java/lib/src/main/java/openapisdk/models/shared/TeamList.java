package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TeamList
 * Teams List
**/
public class TeamList {
    @JsonProperty("sum")
    public Integer sum;
    public TeamList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
    @JsonProperty("teams")
    public Team[] teams;
    public TeamList withTeams(Team[] teams) {
        this.teams = teams;
        return this;
    }
}