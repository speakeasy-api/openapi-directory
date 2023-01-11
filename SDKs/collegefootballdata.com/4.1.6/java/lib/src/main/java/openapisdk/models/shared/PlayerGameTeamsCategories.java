package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerGameTeamsCategories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlayerGameTeamsCategories withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public PlayerGameTeamsCategoriesTypes[] types;
    public PlayerGameTeamsCategories withTypes(PlayerGameTeamsCategoriesTypes[] types) {
        this.types = types;
        return this;
    }
}