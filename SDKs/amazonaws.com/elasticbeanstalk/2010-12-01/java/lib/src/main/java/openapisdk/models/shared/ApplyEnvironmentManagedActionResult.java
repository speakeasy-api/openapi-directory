package openapisdk.models.shared;



/**
 * ApplyEnvironmentManagedActionResult
 * The result message containing information about the managed action.
**/
public class ApplyEnvironmentManagedActionResult {
    public String actionDescription;
    public ApplyEnvironmentManagedActionResult withActionDescription(String actionDescription) {
        this.actionDescription = actionDescription;
        return this;
    }
    public String actionId;
    public ApplyEnvironmentManagedActionResult withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    public ActionTypeEnum actionType;
    public ApplyEnvironmentManagedActionResult withActionType(ActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    public String status;
    public ApplyEnvironmentManagedActionResult withStatus(String status) {
        this.status = status;
        return this;
    }
}