package openapisdk.models.shared;


public enum GrpcRetryPolicyEventEnum {
    CANCELLED("cancelled"),
    DEADLINE_EXCEEDED("deadline-exceeded"),
    INTERNAL("internal"),
    RESOURCE_EXHAUSTED("resource-exhausted"),
    UNAVAILABLE("unavailable");

    public final String value;

    private GrpcRetryPolicyEventEnum(String value) {
        this.value = value;
    }
}
