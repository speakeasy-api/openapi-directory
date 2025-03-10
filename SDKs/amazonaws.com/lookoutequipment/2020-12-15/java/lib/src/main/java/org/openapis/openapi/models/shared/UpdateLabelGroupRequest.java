/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateLabelGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaultCodes")
    public String[] faultCodes;

    public UpdateLabelGroupRequest withFaultCodes(String[] faultCodes) {
        this.faultCodes = faultCodes;
        return this;
    }
    
    @JsonProperty("LabelGroupName")
    public String labelGroupName;

    public UpdateLabelGroupRequest withLabelGroupName(String labelGroupName) {
        this.labelGroupName = labelGroupName;
        return this;
    }
    
    public UpdateLabelGroupRequest(@JsonProperty("LabelGroupName") String labelGroupName) {
        this.labelGroupName = labelGroupName;
  }
}
