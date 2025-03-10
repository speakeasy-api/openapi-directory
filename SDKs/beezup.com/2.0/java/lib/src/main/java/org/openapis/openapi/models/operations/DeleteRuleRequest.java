/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteRuleRequest {
    /**
     * Your rule identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;

    public DeleteRuleRequest withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    
    /**
     * Your store identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;

    public DeleteRuleRequest withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    
    public DeleteRuleRequest(@JsonProperty("ruleId") String ruleId, @JsonProperty("storeId") String storeId) {
        this.ruleId = ruleId;
        this.storeId = storeId;
  }
}
