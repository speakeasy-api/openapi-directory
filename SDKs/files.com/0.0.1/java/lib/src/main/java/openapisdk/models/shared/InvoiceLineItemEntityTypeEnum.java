package openapisdk.models.shared;


public enum InvoiceLineItemEntityTypeEnum {
    INVOICE("invoice"),
    ADJUSTMENT("adjustment"),
    USAGE_OVERAGE("usage_overage"),
    USER_OVERAGE("user_overage"),
    ADDON_SUBSCRIPTION("addon_subscription"),
    MISC_FEE("misc_fee");

    public final String value;

    private InvoiceLineItemEntityTypeEnum(String value) {
        this.value = value;
    }
}
