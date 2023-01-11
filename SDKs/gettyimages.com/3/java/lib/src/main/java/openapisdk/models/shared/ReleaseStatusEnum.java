package openapisdk.models.shared;


public enum ReleaseStatusEnum {
    RELEASE_NOT_IMPORTANT("release_not_important"),
    FULLY_RELEASED("fully_released");

    public final String value;

    private ReleaseStatusEnum(String value) {
        this.value = value;
    }
}
