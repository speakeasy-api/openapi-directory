/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * ReservedDBInstanceMessage - Contains the result of a successful invocation of the &lt;code&gt;DescribeReservedDBInstances&lt;/code&gt; action.
 */
public class ReservedDBInstanceMessage {
    
    public String marker;

    public ReservedDBInstanceMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    
    public ReservedDBInstanceList[] reservedDBInstances;

    public ReservedDBInstanceMessage withReservedDBInstances(ReservedDBInstanceList[] reservedDBInstances) {
        this.reservedDBInstances = reservedDBInstances;
        return this;
    }
    
    public ReservedDBInstanceMessage(){}
}
