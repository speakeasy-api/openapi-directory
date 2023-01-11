package openapisdk.models.shared;


public enum BankAccountAccountTypeEnum {
    BANK_ACCOUNT("bank_account"),
    CREDIT_CARD("credit_card"),
    OTHER("other");

    public final String value;

    private BankAccountAccountTypeEnum(String value) {
        this.value = value;
    }
}
