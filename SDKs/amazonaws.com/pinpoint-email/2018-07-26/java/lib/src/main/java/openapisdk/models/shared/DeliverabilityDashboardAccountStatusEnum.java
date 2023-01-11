package openapisdk.models.shared;


public enum DeliverabilityDashboardAccountStatusEnum {
    ACTIVE("ACTIVE"),
    PENDING_EXPIRATION("PENDING_EXPIRATION"),
    DISABLED("DISABLED");

    public final String value;

    private DeliverabilityDashboardAccountStatusEnum(String value) {
        this.value = value;
    }
}
