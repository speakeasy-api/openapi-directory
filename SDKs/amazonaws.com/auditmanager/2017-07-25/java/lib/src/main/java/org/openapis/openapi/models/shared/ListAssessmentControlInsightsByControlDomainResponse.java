/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAssessmentControlInsightsByControlDomainResponse - Success
 */
public class ListAssessmentControlInsightsByControlDomainResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlInsightsByAssessment")
    public ControlInsightsMetadataByAssessmentItem[] controlInsightsByAssessment;

    public ListAssessmentControlInsightsByControlDomainResponse withControlInsightsByAssessment(ControlInsightsMetadataByAssessmentItem[] controlInsightsByAssessment) {
        this.controlInsightsByAssessment = controlInsightsByAssessment;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListAssessmentControlInsightsByControlDomainResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListAssessmentControlInsightsByControlDomainResponse(){}
}
