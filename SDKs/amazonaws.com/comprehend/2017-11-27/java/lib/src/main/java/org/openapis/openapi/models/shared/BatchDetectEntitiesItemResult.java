/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchDetectEntitiesItemResult - The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
 */
public class BatchDetectEntitiesItemResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Entities")
    public Entity[] entities;

    public BatchDetectEntitiesItemResult withEntities(Entity[] entities) {
        this.entities = entities;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Index")
    public Long index;

    public BatchDetectEntitiesItemResult withIndex(Long index) {
        this.index = index;
        return this;
    }
    
    public BatchDetectEntitiesItemResult(){}
}
