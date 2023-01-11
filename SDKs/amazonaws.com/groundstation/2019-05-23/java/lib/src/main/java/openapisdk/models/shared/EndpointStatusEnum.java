package openapisdk.models.shared;


public enum EndpointStatusEnum {
    CREATED("created"),
    CREATING("creating"),
    DELETED("deleted"),
    DELETING("deleting"),
    FAILED("failed");

    public final String value;

    private EndpointStatusEnum(String value) {
        this.value = value;
    }
}
