package openapisdk.models.shared;


public enum SubscriptionStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive");

    public final String value;

    private SubscriptionStatusEnum(String value) {
        this.value = value;
    }
}
