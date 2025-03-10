/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetOperationRequestBody {
    /**
     * The ID of the operation.
     */
    @JsonProperty("OperationId")
    public String operationId;

    public GetOperationRequestBody withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    
    public GetOperationRequestBody(@JsonProperty("OperationId") String operationId) {
        this.operationId = operationId;
  }
}
