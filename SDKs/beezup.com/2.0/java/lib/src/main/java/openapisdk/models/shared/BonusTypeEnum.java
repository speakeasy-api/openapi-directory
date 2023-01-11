package openapisdk.models.shared;


public enum BonusTypeEnum {
    ONLINE_PAYMENT_METHOD_BONUS("OnlinePaymentMethodBonus"),
    PREVIOUS_INVOICE_PRORATA_BONUS("PreviousInvoiceProrataBonus"),
    PREVIOUS_CONTRACT_BONUS("PreviousContractBonus");

    public final String value;

    private BonusTypeEnum(String value) {
        this.value = value;
    }
}
