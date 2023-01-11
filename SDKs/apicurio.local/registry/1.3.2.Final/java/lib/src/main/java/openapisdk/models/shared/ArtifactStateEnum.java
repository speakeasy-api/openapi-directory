package openapisdk.models.shared;


public enum ArtifactStateEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    DEPRECATED("DEPRECATED"),
    DELETED("DELETED");

    public final String value;

    private ArtifactStateEnum(String value) {
        this.value = value;
    }
}
