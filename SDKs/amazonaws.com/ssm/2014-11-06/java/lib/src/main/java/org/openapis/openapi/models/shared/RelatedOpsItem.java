/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RelatedOpsItem - An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
 */
public class RelatedOpsItem {
    @JsonProperty("OpsItemId")
    public String opsItemId;

    public RelatedOpsItem withOpsItemId(String opsItemId) {
        this.opsItemId = opsItemId;
        return this;
    }
    
    public RelatedOpsItem(@JsonProperty("OpsItemId") String opsItemId) {
        this.opsItemId = opsItemId;
  }
}
