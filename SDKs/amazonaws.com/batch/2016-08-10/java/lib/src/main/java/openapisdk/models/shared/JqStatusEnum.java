package openapisdk.models.shared;


public enum JqStatusEnum {
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    VALID("VALID"),
    INVALID("INVALID");

    public final String value;

    private JqStatusEnum(String value) {
        this.value = value;
    }
}
