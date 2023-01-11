package openapisdk.models.shared;


public enum AccessDirectionEnum {
    INBOUND("inbound"),
    OUTBOUND("outbound");

    public final String value;

    private AccessDirectionEnum(String value) {
        this.value = value;
    }
}
