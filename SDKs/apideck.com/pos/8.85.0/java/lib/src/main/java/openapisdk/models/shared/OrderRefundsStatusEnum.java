package openapisdk.models.shared;


public enum OrderRefundsStatusEnum {
    PENDING("pending"),
    APPROVED("approved"),
    REJECTED("rejected"),
    FAILED("failed");

    public final String value;

    private OrderRefundsStatusEnum(String value) {
        this.value = value;
    }
}
