package openapisdk.models.shared;



/**
 * DeletionTaskFailureReasonType
 * <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
**/
public class DeletionTaskFailureReasonType {
    public String reason;
    public DeletionTaskFailureReasonType withReason(String reason) {
        this.reason = reason;
        return this;
    }
    public RoleUsageType[] roleUsageList;
    public DeletionTaskFailureReasonType withRoleUsageList(RoleUsageType[] roleUsageList) {
        this.roleUsageList = roleUsageList;
        return this;
    }
}