/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateDatastoreRequestBodyDatastorePartitions -  Contains information about the partition dimensions in a data store. 
 */
public class CreateDatastoreRequestBodyDatastorePartitions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitions")
    public org.openapis.openapi.models.shared.DatastorePartition[] partitions;

    public CreateDatastoreRequestBodyDatastorePartitions withPartitions(org.openapis.openapi.models.shared.DatastorePartition[] partitions) {
        this.partitions = partitions;
        return this;
    }
    
    public CreateDatastoreRequestBodyDatastorePartitions(){}
}
