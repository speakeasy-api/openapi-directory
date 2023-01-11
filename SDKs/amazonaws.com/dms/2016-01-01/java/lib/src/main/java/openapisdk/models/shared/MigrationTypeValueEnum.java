package openapisdk.models.shared;


public enum MigrationTypeValueEnum {
    FULL_LOAD("full-load"),
    CDC("cdc"),
    FULL_LOAD_AND_CDC("full-load-and-cdc");

    public final String value;

    private MigrationTypeValueEnum(String value) {
        this.value = value;
    }
}
