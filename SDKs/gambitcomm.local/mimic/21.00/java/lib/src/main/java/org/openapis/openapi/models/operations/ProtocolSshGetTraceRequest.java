/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ProtocolSshGetTraceRequest {
    /**
     * Agent to show whether SSH tracing is enabled
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;

    public ProtocolSshGetTraceRequest withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    
    public ProtocolSshGetTraceRequest(@JsonProperty("agentNum") Integer agentNum) {
        this.agentNum = agentNum;
  }
}
