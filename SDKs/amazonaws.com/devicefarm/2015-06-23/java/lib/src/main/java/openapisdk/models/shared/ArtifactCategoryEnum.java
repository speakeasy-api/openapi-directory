package openapisdk.models.shared;


public enum ArtifactCategoryEnum {
    SCREENSHOT("SCREENSHOT"),
    FILE("FILE"),
    LOG("LOG");

    public final String value;

    private ArtifactCategoryEnum(String value) {
        this.value = value;
    }
}
