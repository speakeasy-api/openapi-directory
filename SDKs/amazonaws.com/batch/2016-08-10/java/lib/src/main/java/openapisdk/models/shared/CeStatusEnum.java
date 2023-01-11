package openapisdk.models.shared;


public enum CeStatusEnum {
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    VALID("VALID"),
    INVALID("INVALID");

    public final String value;

    private CeStatusEnum(String value) {
        this.value = value;
    }
}
