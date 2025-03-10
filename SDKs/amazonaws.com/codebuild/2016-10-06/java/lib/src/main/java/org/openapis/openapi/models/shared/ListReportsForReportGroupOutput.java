/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListReportsForReportGroupOutput - Success
 */
public class ListReportsForReportGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListReportsForReportGroupOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reports")
    public String[] reports;

    public ListReportsForReportGroupOutput withReports(String[] reports) {
        this.reports = reports;
        return this;
    }
    
    public ListReportsForReportGroupOutput(){}
}
