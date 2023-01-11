package openapisdk.models.shared;


public enum IngestionModeEnum {
    BULK("BULK"),
    PUT("PUT"),
    ALL("ALL");

    public final String value;

    private IngestionModeEnum(String value) {
        this.value = value;
    }
}
