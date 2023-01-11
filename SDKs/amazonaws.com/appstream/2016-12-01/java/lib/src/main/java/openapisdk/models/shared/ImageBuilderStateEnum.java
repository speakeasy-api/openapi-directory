package openapisdk.models.shared;


public enum ImageBuilderStateEnum {
    PENDING("PENDING"),
    UPDATING_AGENT("UPDATING_AGENT"),
    RUNNING("RUNNING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    REBOOTING("REBOOTING"),
    SNAPSHOTTING("SNAPSHOTTING"),
    DELETING("DELETING"),
    FAILED("FAILED"),
    UPDATING("UPDATING"),
    PENDING_QUALIFICATION("PENDING_QUALIFICATION");

    public final String value;

    private ImageBuilderStateEnum(String value) {
        this.value = value;
    }
}
