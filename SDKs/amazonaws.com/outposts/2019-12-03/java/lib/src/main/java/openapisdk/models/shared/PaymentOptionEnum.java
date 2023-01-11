package openapisdk.models.shared;


public enum PaymentOptionEnum {
    ALL_UPFRONT("ALL_UPFRONT"),
    NO_UPFRONT("NO_UPFRONT"),
    PARTIAL_UPFRONT("PARTIAL_UPFRONT");

    public final String value;

    private PaymentOptionEnum(String value) {
        this.value = value;
    }
}
