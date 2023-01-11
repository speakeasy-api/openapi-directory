package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionTypeExecutor
 * The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.
**/
public class ActionTypeExecutor {
    @JsonProperty("configuration")
    public ExecutorConfiguration configuration;
    public ActionTypeExecutor withConfiguration(ExecutorConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTimeout")
    public Long jobTimeout;
    public ActionTypeExecutor withJobTimeout(Long jobTimeout) {
        this.jobTimeout = jobTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyStatementsTemplate")
    public String policyStatementsTemplate;
    public ActionTypeExecutor withPolicyStatementsTemplate(String policyStatementsTemplate) {
        this.policyStatementsTemplate = policyStatementsTemplate;
        return this;
    }
    @JsonProperty("type")
    public ExecutorTypeEnum type;
    public ActionTypeExecutor withType(ExecutorTypeEnum type) {
        this.type = type;
        return this;
    }
}