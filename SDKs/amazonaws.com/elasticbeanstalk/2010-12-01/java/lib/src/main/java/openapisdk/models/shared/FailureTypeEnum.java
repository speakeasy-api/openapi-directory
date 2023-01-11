package openapisdk.models.shared;


public enum FailureTypeEnum {
    UPDATE_CANCELLED("UpdateCancelled"),
    CANCELLATION_FAILED("CancellationFailed"),
    ROLLBACK_FAILED("RollbackFailed"),
    ROLLBACK_SUCCESSFUL("RollbackSuccessful"),
    INTERNAL_FAILURE("InternalFailure"),
    INVALID_ENVIRONMENT_STATE("InvalidEnvironmentState"),
    PERMISSIONS_ERROR("PermissionsError");

    public final String value;

    private FailureTypeEnum(String value) {
        this.value = value;
    }
}
