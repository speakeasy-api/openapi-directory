package openapisdk.models.shared;


public enum CloudComponentStateEnum {
    REQUESTED("REQUESTED"),
    INITIATED("INITIATED"),
    DEPLOYABLE("DEPLOYABLE"),
    FAILED("FAILED"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private CloudComponentStateEnum(String value) {
        this.value = value;
    }
}
