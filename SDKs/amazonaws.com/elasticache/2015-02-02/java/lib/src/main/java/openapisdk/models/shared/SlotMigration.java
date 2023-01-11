package openapisdk.models.shared;



/**
 * SlotMigration
 * Represents the progress of an online resharding operation.
**/
public class SlotMigration {
    public Double progressPercentage;
    public SlotMigration withProgressPercentage(Double progressPercentage) {
        this.progressPercentage = progressPercentage;
        return this;
    }
}