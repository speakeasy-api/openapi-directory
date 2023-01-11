package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRemoveTeamAccessRestrictionsRequestBody {
    @JsonProperty("teams")
    public String[] teams;
    public ReposRemoveTeamAccessRestrictionsRequestBody withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
}