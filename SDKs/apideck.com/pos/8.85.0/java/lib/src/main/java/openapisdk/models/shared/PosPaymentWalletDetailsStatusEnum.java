package openapisdk.models.shared;


public enum PosPaymentWalletDetailsStatusEnum {
    AUTHORIZED("authorized"),
    CAPTURED("captured"),
    VOIDED("voided"),
    FAILED("failed"),
    OTHER("other");

    public final String value;

    private PosPaymentWalletDetailsStatusEnum(String value) {
        this.value = value;
    }
}
