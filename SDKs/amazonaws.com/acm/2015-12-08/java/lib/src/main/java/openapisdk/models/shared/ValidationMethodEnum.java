package openapisdk.models.shared;


public enum ValidationMethodEnum {
    EMAIL("EMAIL"),
    DNS("DNS");

    public final String value;

    private ValidationMethodEnum(String value) {
        this.value = value;
    }
}
