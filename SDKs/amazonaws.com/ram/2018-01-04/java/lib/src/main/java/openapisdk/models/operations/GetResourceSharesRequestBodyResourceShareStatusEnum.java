package openapisdk.models.operations;


public enum GetResourceSharesRequestBodyResourceShareStatusEnum {
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    DELETED("DELETED");

    public final String value;

    private GetResourceSharesRequestBodyResourceShareStatusEnum(String value) {
        this.value = value;
    }
}
