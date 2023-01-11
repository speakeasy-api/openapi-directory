package openapisdk.models.shared;


public enum OrderSourceEnum {
    IN_STORE("in-store"),
    ONLINE("online"),
    OPT("opt"),
    API("api"),
    KIOSK("kiosk"),
    CALLER_ID("caller-id"),
    GOOGLE("google"),
    INVOICE("invoice");

    public final String value;

    private OrderSourceEnum(String value) {
        this.value = value;
    }
}
