package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetTeamAccessRestrictionsRequestBody {
    @JsonProperty("teams")
    public String[] teams;
    public ReposSetTeamAccessRestrictionsRequestBody withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
}