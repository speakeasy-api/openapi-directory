package openapisdk.models.shared;



/**
 * ReshardingStatus
 * The status of an online resharding operation.
**/
public class ReshardingStatus {
    public SlotMigration slotMigration;
    public ReshardingStatus withSlotMigration(SlotMigration slotMigration) {
        this.slotMigration = slotMigration;
        return this;
    }
}