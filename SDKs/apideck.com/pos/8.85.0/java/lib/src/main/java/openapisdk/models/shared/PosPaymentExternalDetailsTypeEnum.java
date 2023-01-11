package openapisdk.models.shared;


public enum PosPaymentExternalDetailsTypeEnum {
    CHECK("check"),
    BANK_TRANSFER("bank_transfer"),
    OTHER_GIFT_CARD("other_gift_card"),
    CRYPTO("crypto"),
    SQUARE_CASH("square_cash"),
    SOCIAL("social"),
    EXTERNAL("external"),
    EMONEY("emoney"),
    CARD("card"),
    STORED_BALANCE("stored_balance"),
    FOOD_VOUCHER("food_voucher"),
    OTHER("other");

    public final String value;

    private PosPaymentExternalDetailsTypeEnum(String value) {
        this.value = value;
    }
}
