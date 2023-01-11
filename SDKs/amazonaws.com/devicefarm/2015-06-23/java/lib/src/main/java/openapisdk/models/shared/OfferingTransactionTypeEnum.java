package openapisdk.models.shared;


public enum OfferingTransactionTypeEnum {
    PURCHASE("PURCHASE"),
    RENEW("RENEW"),
    SYSTEM("SYSTEM");

    public final String value;

    private OfferingTransactionTypeEnum(String value) {
        this.value = value;
    }
}
