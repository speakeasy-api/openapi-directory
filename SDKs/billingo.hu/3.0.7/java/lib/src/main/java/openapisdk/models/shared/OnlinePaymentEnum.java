package openapisdk.models.shared;


public enum OnlinePaymentEnum {
    UNKNOWN(""),
    BARION("Barion"),
    SIMPLE_PAY("SimplePay"),
    NO("no");

    public final String value;

    private OnlinePaymentEnum(String value) {
        this.value = value;
    }
}
