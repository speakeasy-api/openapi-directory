package openapisdk.models.shared;


public enum InvoicePaymentStatusEnum {
    PAID("Paid"),
    NOT_PAID("NotPaid"),
    PARTIALLY_PAID("PartiallyPaid"),
    LOSS("Loss");

    public final String value;

    private InvoicePaymentStatusEnum(String value) {
        this.value = value;
    }
}
