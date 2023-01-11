package openapisdk.models.shared;


public enum PaymentCardCardBrandEnum {
    VISA("visa"),
    MASTERCARD("mastercard"),
    AMEX("amex"),
    DISCOVER("discover"),
    DISCOVER_DINERS("discover-diners"),
    JCB("jcb"),
    CHINA_UNIONPAY("china-unionpay"),
    SQUARE_GIFT_CARD("square-gift-card"),
    SQUARE_CAPITAL_CARD("square-capital-card"),
    INTERAC("interac"),
    EFTPOS("eftpos"),
    FELICA("felica"),
    EBT("ebt"),
    OTHER("other");

    public final String value;

    private PaymentCardCardBrandEnum(String value) {
        this.value = value;
    }
}
