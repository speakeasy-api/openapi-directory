package openapisdk.models.shared;


public enum ProjectEntityGlobalAccessEnum {
    NONE("none"),
    ANYONE_WITH_READ("anyone_with_read"),
    ANYONE_WITH_FULL("anyone_with_full");

    public final String value;

    private ProjectEntityGlobalAccessEnum(String value) {
        this.value = value;
    }
}
