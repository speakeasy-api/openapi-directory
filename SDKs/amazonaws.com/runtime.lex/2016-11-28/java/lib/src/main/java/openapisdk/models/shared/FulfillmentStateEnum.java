package openapisdk.models.shared;


public enum FulfillmentStateEnum {
    FULFILLED("Fulfilled"),
    FAILED("Failed"),
    READY_FOR_FULFILLMENT("ReadyForFulfillment");

    public final String value;

    private FulfillmentStateEnum(String value) {
        this.value = value;
    }
}
