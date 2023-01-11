package openapisdk.models.shared;


public enum ArtifactStatusEnum {
    APPROVED("APPROVED"),
    REJECTED("REJECTED"),
    IN_PROGRESS("IN_PROGRESS");

    public final String value;

    private ArtifactStatusEnum(String value) {
        this.value = value;
    }
}
