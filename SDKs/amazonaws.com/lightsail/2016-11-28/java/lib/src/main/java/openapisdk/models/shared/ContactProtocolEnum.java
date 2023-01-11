package openapisdk.models.shared;


public enum ContactProtocolEnum {
    EMAIL("Email"),
    SMS("SMS");

    public final String value;

    private ContactProtocolEnum(String value) {
        this.value = value;
    }
}
