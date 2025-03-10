/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateResourcePolicyStatementRequestBody {
    /**
     * The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the specified ARN. For more information, see &lt;a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html"&gt; Actions, resources, and condition keys for Amazon Lex V2&lt;/a&gt;.
     */
    @JsonProperty("action")
    public String[] action;

    public CreateResourcePolicyStatementRequestBody withAction(String[] action) {
        this.action = action;
        return this;
    }
    
    /**
     * &lt;p&gt;Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key.&lt;/p&gt; &lt;p&gt;For more information, see &lt;a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html"&gt;IAM JSON policy elements: Condition &lt;/a&gt;.&lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public java.util.Map<String, java.util.Map<String, String>> condition;

    public CreateResourcePolicyStatementRequestBody withCondition(java.util.Map<String, java.util.Map<String, String>> condition) {
        this.condition = condition;
        return this;
    }
    
    /**
     * Determines whether the statement allows or denies access to the resource.
     */
    @JsonProperty("effect")
    public CreateResourcePolicyStatementRequestBodyEffectEnum effect;

    public CreateResourcePolicyStatementRequestBody withEffect(CreateResourcePolicyStatementRequestBodyEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    
    /**
     * An IAM principal, such as an IAM users, IAM roles, or AWS services that is allowed or denied access to a resource. For more information, see &lt;a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html"&gt;AWS JSON policy elements: Principal&lt;/a&gt;.
     */
    @JsonProperty("principal")
    public org.openapis.openapi.models.shared.Principal[] principal;

    public CreateResourcePolicyStatementRequestBody withPrincipal(org.openapis.openapi.models.shared.Principal[] principal) {
        this.principal = principal;
        return this;
    }
    
    /**
     * The name of the statement. The ID is the same as the &lt;code&gt;Sid&lt;/code&gt; IAM property. The statement name must be unique within the policy. For more information, see &lt;a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html"&gt;IAM JSON policy elements: Sid&lt;/a&gt;. 
     */
    @JsonProperty("statementId")
    public String statementId;

    public CreateResourcePolicyStatementRequestBody withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
    
    public CreateResourcePolicyStatementRequestBody(@JsonProperty("action") String[] action, @JsonProperty("effect") CreateResourcePolicyStatementRequestBodyEffectEnum effect, @JsonProperty("principal") org.openapis.openapi.models.shared.Principal[] principal, @JsonProperty("statementId") String statementId) {
        this.action = action;
        this.effect = effect;
        this.principal = principal;
        this.statementId = statementId;
  }
}
