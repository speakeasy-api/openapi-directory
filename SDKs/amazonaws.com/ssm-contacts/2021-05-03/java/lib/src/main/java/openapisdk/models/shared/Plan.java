package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Plan
 * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
**/
public class Plan {
    @JsonProperty("Stages")
    public Stage[] stages;
    public Plan withStages(Stage[] stages) {
        this.stages = stages;
        return this;
    }
}