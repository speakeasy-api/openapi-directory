/**
 * <p>The current state of the studio component resource.</p> <p>While a studio component is being created, modified, or deleted, its state will be <code>CREATE_IN_PROGRESS</code>, <code>UPDATE_IN_PROGRESS</code>, or <code>DELETE_IN_PROGRESS</code>.</p> <p>These are called <i>transition states</i>.</p> <p>No modifications may be made to the studio component while it is in a transition state.</p> <p>If creation of the resource fails, the state will change to <code>CREATE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why creation failed. The resource in this state will automatically be deleted from your account after a period of time.</p> <p>If updating the resource fails, the state will change to <code>UPDATE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why the update failed. The resource will be returned to the state it was in when the update request was invoked.</p> <p>If deleting the resource fails, the state will change to <code>DELETE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why the update failed. The resource will be returned to the state it was in when the update request was invoked. After the resource is deleted successfully, it will change to the <code>DELETED</code> state. The resource will no longer count against service quotas and cannot be used or acted upon any futher. It will be removed from your account after a period of time.</p>
 */
export declare enum StudioComponentStateEnum {
    CreateInProgress = "CREATE_IN_PROGRESS",
    Ready = "READY",
    UpdateInProgress = "UPDATE_IN_PROGRESS",
    DeleteInProgress = "DELETE_IN_PROGRESS",
    Deleted = "DELETED",
    DeleteFailed = "DELETE_FAILED",
    CreateFailed = "CREATE_FAILED",
    UpdateFailed = "UPDATE_FAILED"
}
