/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteReportDefinitionRequest - Deletes the specified report.
 */
public class DeleteReportDefinitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportName")
    public String reportName;

    public DeleteReportDefinitionRequest withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    
    public DeleteReportDefinitionRequest(){}
}
