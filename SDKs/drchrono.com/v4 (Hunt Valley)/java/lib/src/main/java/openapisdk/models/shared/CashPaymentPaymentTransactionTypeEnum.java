package openapisdk.models.shared;


public enum CashPaymentPaymentTransactionTypeEnum {
    UNKNOWN(""),
    REF("REF"),
    COR("COR"),
    COPAY("COPAY"),
    COINSR("COINSR"),
    OTHR("OTHR");

    public final String value;

    private CashPaymentPaymentTransactionTypeEnum(String value) {
        this.value = value;
    }
}
