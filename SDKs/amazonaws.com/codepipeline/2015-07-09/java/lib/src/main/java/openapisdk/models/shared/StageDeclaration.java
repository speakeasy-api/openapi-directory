package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StageDeclaration
 * Represents information about a stage and its definition.
**/
public class StageDeclaration {
    @JsonProperty("actions")
    public ActionDeclaration[] actions;
    public StageDeclaration withActions(ActionDeclaration[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockers")
    public BlockerDeclaration[] blockers;
    public StageDeclaration withBlockers(BlockerDeclaration[] blockers) {
        this.blockers = blockers;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public StageDeclaration withName(String name) {
        this.name = name;
        return this;
    }
}