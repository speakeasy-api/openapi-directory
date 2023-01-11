package openapisdk.models.shared;


public enum ArtifactTypeEnum {
    UDF("UDF"),
    DEPENDENCY_JAR("DEPENDENCY_JAR");

    public final String value;

    private ArtifactTypeEnum(String value) {
        this.value = value;
    }
}
