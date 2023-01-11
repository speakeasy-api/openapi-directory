package openapisdk.models.shared;


public enum ArtifactStateEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private ArtifactStateEnum(String value) {
        this.value = value;
    }
}
