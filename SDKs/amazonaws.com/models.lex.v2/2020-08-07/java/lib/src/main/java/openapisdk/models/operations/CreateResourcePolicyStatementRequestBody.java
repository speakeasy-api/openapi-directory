package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateResourcePolicyStatementRequestBody {
    @JsonProperty("action")
    public String[] action;
    public CreateResourcePolicyStatementRequestBody withAction(String[] action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public java.util.Map<String, java.util.Map<String, String>> condition;
    public CreateResourcePolicyStatementRequestBody withCondition(java.util.Map<String, java.util.Map<String, String>> condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("effect")
    public CreateResourcePolicyStatementRequestBodyEffectEnum effect;
    public CreateResourcePolicyStatementRequestBody withEffect(CreateResourcePolicyStatementRequestBodyEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonProperty("principal")
    public openapisdk.models.shared.Principal[] principal;
    public CreateResourcePolicyStatementRequestBody withPrincipal(openapisdk.models.shared.Principal[] principal) {
        this.principal = principal;
        return this;
    }
    @JsonProperty("statementId")
    public String statementId;
    public CreateResourcePolicyStatementRequestBody withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}