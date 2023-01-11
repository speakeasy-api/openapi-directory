package openapisdk.models.shared;


public enum RecordStateEnum {
    STARTED("Started"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed");

    public final String value;

    private RecordStateEnum(String value) {
        this.value = value;
    }
}
