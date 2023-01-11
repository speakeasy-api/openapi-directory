package openapisdk.models.shared;


public enum InstanceStateNameEnum {
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    SHUTTING_DOWN("SHUTTING_DOWN"),
    TERMINATED("TERMINATED"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED");

    public final String value;

    private InstanceStateNameEnum(String value) {
        this.value = value;
    }
}
