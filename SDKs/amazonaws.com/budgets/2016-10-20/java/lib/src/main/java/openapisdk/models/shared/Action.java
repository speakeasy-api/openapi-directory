package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Action
 *  A budget action resource. 
**/
public class Action {
    @JsonProperty("ActionId")
    public String actionId;
    public Action withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonProperty("ActionThreshold")
    public ActionThreshold actionThreshold;
    public Action withActionThreshold(ActionThreshold actionThreshold) {
        this.actionThreshold = actionThreshold;
        return this;
    }
    @JsonProperty("ActionType")
    public ActionTypeEnum actionType;
    public Action withActionType(ActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonProperty("ApprovalModel")
    public ApprovalModelEnum approvalModel;
    public Action withApprovalModel(ApprovalModelEnum approvalModel) {
        this.approvalModel = approvalModel;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public Action withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("Definition")
    public Definition definition;
    public Action withDefinition(Definition definition) {
        this.definition = definition;
        return this;
    }
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public Action withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonProperty("NotificationType")
    public NotificationTypeEnum notificationType;
    public Action withNotificationType(NotificationTypeEnum notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonProperty("Status")
    public ActionStatusEnum status;
    public Action withStatus(ActionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("Subscribers")
    public Subscriber[] subscribers;
    public Action withSubscribers(Subscriber[] subscribers) {
        this.subscribers = subscribers;
        return this;
    }
}