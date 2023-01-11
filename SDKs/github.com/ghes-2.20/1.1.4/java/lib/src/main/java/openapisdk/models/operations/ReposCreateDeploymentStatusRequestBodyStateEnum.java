package openapisdk.models.operations;


public enum ReposCreateDeploymentStatusRequestBodyStateEnum {
    ERROR("error"),
    FAILURE("failure"),
    INACTIVE("inactive"),
    IN_PROGRESS("in_progress"),
    QUEUED("queued"),
    PENDING("pending"),
    SUCCESS("success");

    public final String value;

    private ReposCreateDeploymentStatusRequestBodyStateEnum(String value) {
        this.value = value;
    }
}
