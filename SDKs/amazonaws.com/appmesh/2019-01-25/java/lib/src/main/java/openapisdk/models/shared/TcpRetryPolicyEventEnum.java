package openapisdk.models.shared;


public enum TcpRetryPolicyEventEnum {
    CONNECTION_ERROR("connection-error");

    public final String value;

    private TcpRetryPolicyEventEnum(String value) {
        this.value = value;
    }
}
