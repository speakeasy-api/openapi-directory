package openapisdk.models.shared;


public enum TrustDirectionEnum {
    ONE_WAY_OUTGOING("One-Way: Outgoing"),
    ONE_WAY_INCOMING("One-Way: Incoming"),
    TWO_WAY("Two-Way");

    public final String value;

    private TrustDirectionEnum(String value) {
        this.value = value;
    }
}
