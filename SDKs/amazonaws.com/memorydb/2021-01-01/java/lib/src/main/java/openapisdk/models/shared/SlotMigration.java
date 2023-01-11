package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlotMigration
 * Represents the progress of an online resharding operation.
**/
public class SlotMigration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProgressPercentage")
    public Double progressPercentage;
    public SlotMigration withProgressPercentage(Double progressPercentage) {
        this.progressPercentage = progressPercentage;
        return this;
    }
}