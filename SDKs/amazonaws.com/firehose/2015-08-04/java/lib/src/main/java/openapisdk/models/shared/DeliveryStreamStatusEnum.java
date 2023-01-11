package openapisdk.models.shared;


public enum DeliveryStreamStatusEnum {
    CREATING("CREATING"),
    CREATING_FAILED("CREATING_FAILED"),
    DELETING("DELETING"),
    DELETING_FAILED("DELETING_FAILED"),
    ACTIVE("ACTIVE");

    public final String value;

    private DeliveryStreamStatusEnum(String value) {
        this.value = value;
    }
}
