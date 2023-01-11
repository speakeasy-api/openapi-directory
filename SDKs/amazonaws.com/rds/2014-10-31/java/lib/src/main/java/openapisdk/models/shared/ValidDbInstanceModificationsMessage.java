package openapisdk.models.shared;



/**
 * ValidDbInstanceModificationsMessage
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>. 
**/
public class ValidDbInstanceModificationsMessage {
    public ValidStorageOptionsList[] storage;
    public ValidDbInstanceModificationsMessage withStorage(ValidStorageOptionsList[] storage) {
        this.storage = storage;
        return this;
    }
    public AvailableProcessorFeatureList[] validProcessorFeatures;
    public ValidDbInstanceModificationsMessage withValidProcessorFeatures(AvailableProcessorFeatureList[] validProcessorFeatures) {
        this.validProcessorFeatures = validProcessorFeatures;
        return this;
    }
}