package openapisdk.models.shared;


public enum SavingsPlanStateEnum {
    PAYMENT_PENDING("payment-pending"),
    PAYMENT_FAILED("payment-failed"),
    ACTIVE("active"),
    RETIRED("retired"),
    QUEUED("queued"),
    QUEUED_DELETED("queued-deleted");

    public final String value;

    private SavingsPlanStateEnum(String value) {
        this.value = value;
    }
}
