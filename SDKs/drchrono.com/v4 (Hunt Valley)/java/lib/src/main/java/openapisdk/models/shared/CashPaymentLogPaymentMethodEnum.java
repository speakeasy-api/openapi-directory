package openapisdk.models.shared;


public enum CashPaymentLogPaymentMethodEnum {
    CASH("CASH"),
    CHCK("CHCK"),
    DBIT("DBIT"),
    CRDT("CRDT"),
    AMEX("AMEX"),
    VISA("VISA"),
    MSTR("MSTR"),
    DISC("DISC"),
    SQR1("SQR1"),
    SQRE("SQRE"),
    PTPA("PTPA"),
    ONPT("ONPT"),
    OTHR("OTHR");

    public final String value;

    private CashPaymentLogPaymentMethodEnum(String value) {
        this.value = value;
    }
}
