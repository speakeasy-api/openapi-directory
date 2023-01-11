package openapisdk.models.operations;


public enum Alsfc400ApplicationJsonErrorEnum {
    MISSING_PARAMETER("missing_parameter"),
    INVALID_PARAMETER("invalid_parameter"),
    INVALID_FORMAT("invalid_format"),
    INVALID_TXNID("invalid_txnid"),
    INVALID_CONSENTID("invalid_consentid");

    public final String value;

    private Alsfc400ApplicationJsonErrorEnum(String value) {
        this.value = value;
    }
}
