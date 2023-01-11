package openapisdk.models.shared;


public enum PaymentCardCardTypeEnum {
    CREDIT("credit"),
    DEBIT("debit"),
    PREPAID("prepaid"),
    OTHER("other");

    public final String value;

    private PaymentCardCardTypeEnum(String value) {
        this.value = value;
    }
}
