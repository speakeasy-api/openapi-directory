package openapisdk.models.shared;


public enum FilterEnum {
    COMPLETED("completed"),
    SUCCESSFUL("successful"),
    FAILED("failed"),
    RUNNING("running");

    public final String value;

    private FilterEnum(String value) {
        this.value = value;
    }
}
