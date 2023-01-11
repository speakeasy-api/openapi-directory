package openapisdk.models.shared;


public enum UpsertActionEnum {
    UPDATED("UPDATED"),
    APPENDED("APPENDED");

    public final String value;

    private UpsertActionEnum(String value) {
        this.value = value;
    }
}
