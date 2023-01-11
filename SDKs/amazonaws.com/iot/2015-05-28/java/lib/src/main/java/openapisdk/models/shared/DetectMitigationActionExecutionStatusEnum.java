package openapisdk.models.shared;


public enum DetectMitigationActionExecutionStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCESSFUL("SUCCESSFUL"),
    FAILED("FAILED"),
    SKIPPED("SKIPPED");

    public final String value;

    private DetectMitigationActionExecutionStatusEnum(String value) {
        this.value = value;
    }
}
