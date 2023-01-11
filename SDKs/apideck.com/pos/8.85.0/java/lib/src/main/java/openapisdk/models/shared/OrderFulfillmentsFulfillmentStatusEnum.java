package openapisdk.models.shared;


public enum OrderFulfillmentsFulfillmentStatusEnum {
    PROPOSED("proposed"),
    RESERVED("reserved"),
    PREPARED("prepared"),
    COMPLETED("completed"),
    CANCELLED("cancelled"),
    FAILED("failed"),
    OTHER("other");

    public final String value;

    private OrderFulfillmentsFulfillmentStatusEnum(String value) {
        this.value = value;
    }
}
