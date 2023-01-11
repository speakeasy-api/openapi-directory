package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposAddTeamAccessRestrictionsRequestBody1 {
    @JsonProperty("teams")
    public String[] teams;
    public ReposAddTeamAccessRestrictionsRequestBody1 withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
}