package openapisdk.models.operations;


public enum InvokeXAmzInvocationTypeEnum {
    EVENT("Event"),
    REQUEST_RESPONSE("RequestResponse"),
    DRY_RUN("DryRun");

    public final String value;

    private InvokeXAmzInvocationTypeEnum(String value) {
        this.value = value;
    }
}
