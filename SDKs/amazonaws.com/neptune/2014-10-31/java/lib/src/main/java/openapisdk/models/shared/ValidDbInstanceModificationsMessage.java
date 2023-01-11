package openapisdk.models.shared;



/**
 * ValidDbInstanceModificationsMessage
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. 
**/
public class ValidDbInstanceModificationsMessage {
    public ValidStorageOptionsList[] storage;
    public ValidDbInstanceModificationsMessage withStorage(ValidStorageOptionsList[] storage) {
        this.storage = storage;
        return this;
    }
}