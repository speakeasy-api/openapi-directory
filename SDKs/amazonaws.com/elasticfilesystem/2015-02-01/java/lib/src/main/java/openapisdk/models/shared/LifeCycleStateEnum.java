package openapisdk.models.shared;


public enum LifeCycleStateEnum {
    CREATING("creating"),
    AVAILABLE("available"),
    UPDATING("updating"),
    DELETING("deleting"),
    DELETED("deleted"),
    ERROR("error");

    public final String value;

    private LifeCycleStateEnum(String value) {
        this.value = value;
    }
}
