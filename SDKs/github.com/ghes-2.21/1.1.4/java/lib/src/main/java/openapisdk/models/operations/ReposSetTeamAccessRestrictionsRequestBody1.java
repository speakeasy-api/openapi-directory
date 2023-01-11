package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetTeamAccessRestrictionsRequestBody1 {
    @JsonProperty("teams")
    public String[] teams;
    public ReposSetTeamAccessRestrictionsRequestBody1 withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
}