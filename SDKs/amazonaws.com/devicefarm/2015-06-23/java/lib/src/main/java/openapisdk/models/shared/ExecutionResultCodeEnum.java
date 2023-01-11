package openapisdk.models.shared;


public enum ExecutionResultCodeEnum {
    PARSING_FAILED("PARSING_FAILED"),
    VPC_ENDPOINT_SETUP_FAILED("VPC_ENDPOINT_SETUP_FAILED");

    public final String value;

    private ExecutionResultCodeEnum(String value) {
        this.value = value;
    }
}
