package openapisdk.models.operations;


public enum ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum {
    ACH_FAILURE("ACHFailure"),
    ADJUSTMENT("Adjustment"),
    ATTEMPT_FAILED("AttemptFailed"),
    CHARGEBACK("Chargeback"),
    CREDIT("Credit"),
    CREDIT_EXPIRATION("CreditExpiration"),
    INVOICE("Invoice"),
    PAYMENT("Payment"),
    REFUND("Refund"),
    REVERSAL("Reversal");

    public final String value;

    private ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum(String value) {
        this.value = value;
    }
}
