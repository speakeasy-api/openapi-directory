package openapisdk.models.operations;


public enum CreateOrderRequestBodyPaymentOptionEnum {
    ALL_UPFRONT("ALL_UPFRONT"),
    NO_UPFRONT("NO_UPFRONT"),
    PARTIAL_UPFRONT("PARTIAL_UPFRONT");

    public final String value;

    private CreateOrderRequestBodyPaymentOptionEnum(String value) {
        this.value = value;
    }
}
