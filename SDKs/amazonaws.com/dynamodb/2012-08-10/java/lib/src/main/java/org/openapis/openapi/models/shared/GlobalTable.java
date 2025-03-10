/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GlobalTable - Represents the properties of a global table.
 */
public class GlobalTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalTableName")
    public String globalTableName;

    public GlobalTable withGlobalTableName(String globalTableName) {
        this.globalTableName = globalTableName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationGroup")
    public Replica[] replicationGroup;

    public GlobalTable withReplicationGroup(Replica[] replicationGroup) {
        this.replicationGroup = replicationGroup;
        return this;
    }
    
    public GlobalTable(){}
}
