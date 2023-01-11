package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateBudgetActionRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public CreateBudgetActionRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ActionThreshold")
    public ActionThreshold actionThreshold;
    public CreateBudgetActionRequest withActionThreshold(ActionThreshold actionThreshold) {
        this.actionThreshold = actionThreshold;
        return this;
    }
    @JsonProperty("ActionType")
    public ActionTypeEnum actionType;
    public CreateBudgetActionRequest withActionType(ActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonProperty("ApprovalModel")
    public ApprovalModelEnum approvalModel;
    public CreateBudgetActionRequest withApprovalModel(ApprovalModelEnum approvalModel) {
        this.approvalModel = approvalModel;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public CreateBudgetActionRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("Definition")
    public Definition definition;
    public CreateBudgetActionRequest withDefinition(Definition definition) {
        this.definition = definition;
        return this;
    }
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public CreateBudgetActionRequest withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonProperty("NotificationType")
    public NotificationTypeEnum notificationType;
    public CreateBudgetActionRequest withNotificationType(NotificationTypeEnum notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonProperty("Subscribers")
    public Subscriber[] subscribers;
    public CreateBudgetActionRequest withSubscribers(Subscriber[] subscribers) {
        this.subscribers = subscribers;
        return this;
    }
}