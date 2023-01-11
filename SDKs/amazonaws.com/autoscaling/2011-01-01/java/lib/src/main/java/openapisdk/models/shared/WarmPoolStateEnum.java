package openapisdk.models.shared;


public enum WarmPoolStateEnum {
    STOPPED("Stopped"),
    RUNNING("Running");

    public final String value;

    private WarmPoolStateEnum(String value) {
        this.value = value;
    }
}
