package openapisdk.models.shared;


public enum ProfilePictureSelectedEnum {
    GRAVATAR("gravatar"),
    INITIALS("initials"),
    UPLOADED("uploaded");

    public final String value;

    private ProfilePictureSelectedEnum(String value) {
        this.value = value;
    }
}
