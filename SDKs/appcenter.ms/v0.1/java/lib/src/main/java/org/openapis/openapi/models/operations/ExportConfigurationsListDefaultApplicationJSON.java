/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExportConfigurationsListDefaultApplicationJSON - Error code with reason
 */
public class ExportConfigurationsListDefaultApplicationJSON {
    @JsonProperty("error")
    public ExportConfigurationsListDefaultApplicationJSONError error;

    public ExportConfigurationsListDefaultApplicationJSON withError(ExportConfigurationsListDefaultApplicationJSONError error) {
        this.error = error;
        return this;
    }
    
    public ExportConfigurationsListDefaultApplicationJSON(@JsonProperty("error") ExportConfigurationsListDefaultApplicationJSONError error) {
        this.error = error;
  }
}
