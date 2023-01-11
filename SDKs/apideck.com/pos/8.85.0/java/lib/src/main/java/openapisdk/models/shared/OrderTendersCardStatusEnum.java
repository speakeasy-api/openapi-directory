package openapisdk.models.shared;


public enum OrderTendersCardStatusEnum {
    AUTHORIZED("authorized"),
    CAPTURED("captured"),
    FAILED("failed"),
    VOIDED("voided");

    public final String value;

    private OrderTendersCardStatusEnum(String value) {
        this.value = value;
    }
}
