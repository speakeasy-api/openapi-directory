package openapisdk.models.shared;


public enum PiiEntityTypeEnum {
    BANK_ACCOUNT_NUMBER("BANK_ACCOUNT_NUMBER"),
    BANK_ROUTING("BANK_ROUTING"),
    CREDIT_DEBIT_NUMBER("CREDIT_DEBIT_NUMBER"),
    CREDIT_DEBIT_CVV("CREDIT_DEBIT_CVV"),
    CREDIT_DEBIT_EXPIRY("CREDIT_DEBIT_EXPIRY"),
    PIN("PIN"),
    EMAIL("EMAIL"),
    ADDRESS("ADDRESS"),
    NAME("NAME"),
    PHONE("PHONE"),
    SSN("SSN"),
    DATE_TIME("DATE_TIME"),
    PASSPORT_NUMBER("PASSPORT_NUMBER"),
    DRIVER_ID("DRIVER_ID"),
    URL("URL"),
    AGE("AGE"),
    USERNAME("USERNAME"),
    PASSWORD("PASSWORD"),
    AWS_ACCESS_KEY("AWS_ACCESS_KEY"),
    AWS_SECRET_KEY("AWS_SECRET_KEY"),
    IP_ADDRESS("IP_ADDRESS"),
    MAC_ADDRESS("MAC_ADDRESS"),
    ALL("ALL");

    public final String value;

    private PiiEntityTypeEnum(String value) {
        this.value = value;
    }
}
