package openapisdk.models.shared;


public enum PosPaymentSourceEnum {
    CARD("card"),
    BANK_ACCOUNT("bank_account"),
    WALLET("wallet"),
    BNPL("bnpl"),
    CASH("cash"),
    EXTERNAL("external"),
    OTHER("other");

    public final String value;

    private PosPaymentSourceEnum(String value) {
        this.value = value;
    }
}
