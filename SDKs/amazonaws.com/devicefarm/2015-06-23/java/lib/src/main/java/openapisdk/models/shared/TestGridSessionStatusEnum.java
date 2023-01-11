package openapisdk.models.shared;


public enum TestGridSessionStatusEnum {
    ACTIVE("ACTIVE"),
    CLOSED("CLOSED"),
    ERRORED("ERRORED");

    public final String value;

    private TestGridSessionStatusEnum(String value) {
        this.value = value;
    }
}
