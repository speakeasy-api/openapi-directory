/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportApplicationUsageResult - Success
 */
public class ImportApplicationUsageResult {
    @JsonProperty("importId")
    public String importId;

    public ImportApplicationUsageResult withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    
    public ImportApplicationUsageResult(@JsonProperty("importId") String importId) {
        this.importId = importId;
  }
}
