package openapisdk.models.shared;


public enum SavingsPlanPaymentOptionEnum {
    ALL_UPFRONT("All Upfront"),
    PARTIAL_UPFRONT("Partial Upfront"),
    NO_UPFRONT("No Upfront");

    public final String value;

    private SavingsPlanPaymentOptionEnum(String value) {
        this.value = value;
    }
}
