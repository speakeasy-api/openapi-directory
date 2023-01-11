package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRemoveTeamAccessRestrictionsRequestBody1 {
    @JsonProperty("teams")
    public String[] teams;
    public ReposRemoveTeamAccessRestrictionsRequestBody1 withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
}