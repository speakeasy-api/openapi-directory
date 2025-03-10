/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GoogleCloudFunctionRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public String requestMode;

    public GoogleCloudFunctionRulePatch withRequestMode(String requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    
    @JsonProperty("ruleType")
    public GoogleCloudFunctionRulePatchRuleTypeEnum ruleType;

    public GoogleCloudFunctionRulePatch withRuleType(GoogleCloudFunctionRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSourcePatch source;

    public GoogleCloudFunctionRulePatch withSource(RuleSourcePatch source) {
        this.source = source;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;

    public GoogleCloudFunctionRulePatch withStatus(String status) {
        this.status = status;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public GoogleCloudFunctionRulePatchTarget target;

    public GoogleCloudFunctionRulePatch withTarget(GoogleCloudFunctionRulePatchTarget target) {
        this.target = target;
        return this;
    }
    
    public GoogleCloudFunctionRulePatch(@JsonProperty("ruleType") GoogleCloudFunctionRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
  }
}
