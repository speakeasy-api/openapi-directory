package openapisdk.models.shared;


public enum DirectoryStateEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    DELETED("DELETED");

    public final String value;

    private DirectoryStateEnum(String value) {
        this.value = value;
    }
}
