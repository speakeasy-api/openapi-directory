package openapisdk.models.shared;


public enum ScalingPlanStatusCodeEnum {
    ACTIVE("Active"),
    ACTIVE_WITH_PROBLEMS("ActiveWithProblems"),
    CREATION_IN_PROGRESS("CreationInProgress"),
    CREATION_FAILED("CreationFailed"),
    DELETION_IN_PROGRESS("DeletionInProgress"),
    DELETION_FAILED("DeletionFailed"),
    UPDATE_IN_PROGRESS("UpdateInProgress"),
    UPDATE_FAILED("UpdateFailed");

    public final String value;

    private ScalingPlanStatusCodeEnum(String value) {
        this.value = value;
    }
}
