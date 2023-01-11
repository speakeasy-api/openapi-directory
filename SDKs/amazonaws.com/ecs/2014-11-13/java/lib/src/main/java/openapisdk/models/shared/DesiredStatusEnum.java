package openapisdk.models.shared;


public enum DesiredStatusEnum {
    RUNNING("RUNNING"),
    PENDING("PENDING"),
    STOPPED("STOPPED");

    public final String value;

    private DesiredStatusEnum(String value) {
        this.value = value;
    }
}
