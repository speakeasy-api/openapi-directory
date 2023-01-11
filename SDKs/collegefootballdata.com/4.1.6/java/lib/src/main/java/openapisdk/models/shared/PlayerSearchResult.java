package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerSearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public PlayerSearchResult withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public PlayerSearchResult withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hometown")
    public String hometown;
    public PlayerSearchResult withHometown(String hometown) {
        this.hometown = hometown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PlayerSearchResult withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jersey")
    public Long jersey;
    public PlayerSearchResult withJersey(Long jersey) {
        this.jersey = jersey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public PlayerSearchResult withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlayerSearchResult withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public String position;
    public PlayerSearchResult withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public PlayerSearchResult withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamColor")
    public String teamColor;
    public PlayerSearchResult withTeamColor(String teamColor) {
        this.teamColor = teamColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamColorSecondary")
    public String teamColorSecondary;
    public PlayerSearchResult withTeamColorSecondary(String teamColorSecondary) {
        this.teamColorSecondary = teamColorSecondary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public PlayerSearchResult withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}