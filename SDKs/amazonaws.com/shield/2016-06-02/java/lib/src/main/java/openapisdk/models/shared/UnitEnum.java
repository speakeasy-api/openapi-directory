package openapisdk.models.shared;


public enum UnitEnum {
    BITS("BITS"),
    BYTES("BYTES"),
    PACKETS("PACKETS"),
    REQUESTS("REQUESTS");

    public final String value;

    private UnitEnum(String value) {
        this.value = value;
    }
}
