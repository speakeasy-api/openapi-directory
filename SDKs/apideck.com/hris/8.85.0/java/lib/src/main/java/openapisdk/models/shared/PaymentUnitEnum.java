package openapisdk.models.shared;


public enum PaymentUnitEnum {
    HOUR("hour"),
    WEEK("week"),
    MONTH("month"),
    YEAR("year"),
    PAYCHECK("paycheck");

    public final String value;

    private PaymentUnitEnum(String value) {
        this.value = value;
    }
}
