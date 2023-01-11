package openapisdk.models.shared;


public enum PosPaymentStatusEnum {
    APPROVED("approved"),
    PENDING("pending"),
    COMPLETED("completed"),
    CANCELED("canceled"),
    FAILED("failed"),
    OTHER("other");

    public final String value;

    private PosPaymentStatusEnum(String value) {
        this.value = value;
    }
}
