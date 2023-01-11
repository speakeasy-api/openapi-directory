package openapisdk.models.operations;


public enum ReposCreateCommitStatusRequestBodyStateEnum {
    ERROR("error"),
    FAILURE("failure"),
    PENDING("pending"),
    SUCCESS("success");

    public final String value;

    private ReposCreateCommitStatusRequestBodyStateEnum(String value) {
        this.value = value;
    }
}
