package openapisdk.models.shared;


public enum AppStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    DELETE_FAILED("DELETE_FAILED");

    public final String value;

    private AppStatusEnum(String value) {
        this.value = value;
    }
}
