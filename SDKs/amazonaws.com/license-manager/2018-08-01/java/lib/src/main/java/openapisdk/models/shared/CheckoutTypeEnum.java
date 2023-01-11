package openapisdk.models.shared;


public enum CheckoutTypeEnum {
    PROVISIONAL("PROVISIONAL"),
    PERPETUAL("PERPETUAL");

    public final String value;

    private CheckoutTypeEnum(String value) {
        this.value = value;
    }
}
