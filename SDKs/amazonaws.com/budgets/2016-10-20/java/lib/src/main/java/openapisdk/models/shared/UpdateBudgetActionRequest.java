package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBudgetActionRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public UpdateBudgetActionRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ActionId")
    public String actionId;
    public UpdateBudgetActionRequest withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActionThreshold")
    public ActionThreshold actionThreshold;
    public UpdateBudgetActionRequest withActionThreshold(ActionThreshold actionThreshold) {
        this.actionThreshold = actionThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApprovalModel")
    public ApprovalModelEnum approvalModel;
    public UpdateBudgetActionRequest withApprovalModel(ApprovalModelEnum approvalModel) {
        this.approvalModel = approvalModel;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public UpdateBudgetActionRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Definition")
    public Definition definition;
    public UpdateBudgetActionRequest withDefinition(Definition definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public UpdateBudgetActionRequest withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationType")
    public NotificationTypeEnum notificationType;
    public UpdateBudgetActionRequest withNotificationType(NotificationTypeEnum notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subscribers")
    public Subscriber[] subscribers;
    public UpdateBudgetActionRequest withSubscribers(Subscriber[] subscribers) {
        this.subscribers = subscribers;
        return this;
    }
}