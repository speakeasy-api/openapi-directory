package openapisdk.models.shared;


public enum BillingMethodEnum {
    METERED("METERED"),
    UNMETERED("UNMETERED");

    public final String value;

    private BillingMethodEnum(String value) {
        this.value = value;
    }
}
