package openapisdk.models.shared;


public enum EntityStateEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    DELETED("DELETED");

    public final String value;

    private EntityStateEnum(String value) {
        this.value = value;
    }
}
