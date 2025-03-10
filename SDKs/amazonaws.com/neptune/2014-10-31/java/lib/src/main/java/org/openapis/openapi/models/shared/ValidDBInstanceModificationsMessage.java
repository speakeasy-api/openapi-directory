/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * ValidDBInstanceModificationsMessage - Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the &lt;a&gt;DescribeValidDBInstanceModifications&lt;/a&gt; action. You can use this information when you call &lt;a&gt;ModifyDBInstance&lt;/a&gt;. 
 */
public class ValidDBInstanceModificationsMessage {
    
    public ValidStorageOptionsList[] storage;

    public ValidDBInstanceModificationsMessage withStorage(ValidStorageOptionsList[] storage) {
        this.storage = storage;
        return this;
    }
    
    public ValidDBInstanceModificationsMessage(){}
}
