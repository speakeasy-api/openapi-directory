package openapisdk.models.shared;


public enum EndpointStatusEnum {
    CREATING("CREATING"),
    DELETING("DELETING"),
    FAILED("FAILED"),
    IN_SERVICE("IN_SERVICE"),
    UPDATING("UPDATING");

    public final String value;

    private EndpointStatusEnum(String value) {
        this.value = value;
    }
}
