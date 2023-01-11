package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReshardingStatus
 * The status of the online resharding
**/
public class ReshardingStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SlotMigration")
    public SlotMigration slotMigration;
    public ReshardingStatus withSlotMigration(SlotMigration slotMigration) {
        this.slotMigration = slotMigration;
        return this;
    }
}