package openapisdk.models.operations;


public enum GetDescribeDataSharesForProducerStatusEnum {
    ACTIVE("ACTIVE"),
    AUTHORIZED("AUTHORIZED"),
    PENDING_AUTHORIZATION("PENDING_AUTHORIZATION"),
    DEAUTHORIZED("DEAUTHORIZED"),
    REJECTED("REJECTED");

    public final String value;

    private GetDescribeDataSharesForProducerStatusEnum(String value) {
        this.value = value;
    }
}
