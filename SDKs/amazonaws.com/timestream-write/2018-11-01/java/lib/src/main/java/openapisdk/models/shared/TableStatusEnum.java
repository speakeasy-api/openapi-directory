package openapisdk.models.shared;


public enum TableStatusEnum {
    ACTIVE("ACTIVE"),
    DELETING("DELETING");

    public final String value;

    private TableStatusEnum(String value) {
        this.value = value;
    }
}
