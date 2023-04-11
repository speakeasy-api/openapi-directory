/**
 * <p>The deployment status of a resource. Status can be one of the following:</p> <p>PENDING: Amazon Route 53 Application Recovery Controller is creating the resource.</p> <p>DEPLOYED: The resource is deployed and ready to use.</p> <p>PENDING_DELETION: Amazon Route 53 Application Recovery Controller is deleting the resource.</p>
 */
export declare enum StatusEnum {
    Pending = "PENDING",
    Deployed = "DEPLOYED",
    PendingDeletion = "PENDING_DELETION"
}
