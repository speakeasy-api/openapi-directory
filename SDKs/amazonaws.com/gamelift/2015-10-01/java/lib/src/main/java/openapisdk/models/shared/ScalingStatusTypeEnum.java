package openapisdk.models.shared;


public enum ScalingStatusTypeEnum {
    ACTIVE("ACTIVE"),
    UPDATE_REQUESTED("UPDATE_REQUESTED"),
    UPDATING("UPDATING"),
    DELETE_REQUESTED("DELETE_REQUESTED"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    ERROR("ERROR");

    public final String value;

    private ScalingStatusTypeEnum(String value) {
        this.value = value;
    }
}
