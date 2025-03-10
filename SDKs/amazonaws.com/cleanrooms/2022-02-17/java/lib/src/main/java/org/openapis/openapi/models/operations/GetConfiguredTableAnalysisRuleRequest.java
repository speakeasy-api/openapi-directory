/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetConfiguredTableAnalysisRuleRequest {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GetConfiguredTableAnalysisRuleRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GetConfiguredTableAnalysisRuleRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GetConfiguredTableAnalysisRuleRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GetConfiguredTableAnalysisRuleRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GetConfiguredTableAnalysisRuleRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GetConfiguredTableAnalysisRuleRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GetConfiguredTableAnalysisRuleRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    /**
     * The analysis rule to be retrieved. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysisRuleType")
    public GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum analysisRuleType;

    public GetConfiguredTableAnalysisRuleRequest withAnalysisRuleType(GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum analysisRuleType) {
        this.analysisRuleType = analysisRuleType;
        return this;
    }
    
    /**
     * The unique identifier for the configured table to retrieve. Currently accepts the configured table ID.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configuredTableIdentifier")
    public String configuredTableIdentifier;

    public GetConfiguredTableAnalysisRuleRequest withConfiguredTableIdentifier(String configuredTableIdentifier) {
        this.configuredTableIdentifier = configuredTableIdentifier;
        return this;
    }
    
    public GetConfiguredTableAnalysisRuleRequest(@JsonProperty("analysisRuleType") GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum analysisRuleType, @JsonProperty("configuredTableIdentifier") String configuredTableIdentifier) {
        this.analysisRuleType = analysisRuleType;
        this.configuredTableIdentifier = configuredTableIdentifier;
  }
}
