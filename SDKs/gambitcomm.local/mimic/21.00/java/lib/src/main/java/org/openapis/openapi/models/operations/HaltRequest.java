/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class HaltRequest {
    /**
     * Agent to return the primary IP
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;

    public HaltRequest withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    
    public HaltRequest(@JsonProperty("agentNum") Integer agentNum) {
        this.agentNum = agentNum;
  }
}
