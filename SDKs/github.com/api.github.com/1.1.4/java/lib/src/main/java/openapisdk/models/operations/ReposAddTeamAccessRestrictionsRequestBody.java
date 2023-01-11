package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposAddTeamAccessRestrictionsRequestBody {
    @JsonProperty("teams")
    public String[] teams;
    public ReposAddTeamAccessRestrictionsRequestBody withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
}