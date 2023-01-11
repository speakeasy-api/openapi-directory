package openapisdk.models.shared;


public enum PaymentMethodEnum {
    TRANSFER("Transfer"),
    DEBIT("Debit"),
    PAYPAL("Paypal"),
    CHECK("Check"),
    CREDIT_NOTE("CreditNote"),
    LOSS("Loss"),
    ONLINE_PAYMENT("OnlinePayment");

    public final String value;

    private PaymentMethodEnum(String value) {
        this.value = value;
    }
}
