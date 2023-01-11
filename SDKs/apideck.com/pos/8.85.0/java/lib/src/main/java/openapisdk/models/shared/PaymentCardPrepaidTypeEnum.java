package openapisdk.models.shared;


public enum PaymentCardPrepaidTypeEnum {
    NON_PREPAID("non-prepaid"),
    PREPAID("prepaid"),
    UNKNOWN("unknown");

    public final String value;

    private PaymentCardPrepaidTypeEnum(String value) {
        this.value = value;
    }
}
