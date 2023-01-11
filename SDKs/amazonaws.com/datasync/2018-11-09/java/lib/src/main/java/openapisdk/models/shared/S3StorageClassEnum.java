package openapisdk.models.shared;


public enum S3StorageClassEnum {
    STANDARD("STANDARD"),
    STANDARD_IA("STANDARD_IA"),
    ONEZONE_IA("ONEZONE_IA"),
    INTELLIGENT_TIERING("INTELLIGENT_TIERING"),
    GLACIER("GLACIER"),
    DEEP_ARCHIVE("DEEP_ARCHIVE"),
    OUTPOSTS("OUTPOSTS");

    public final String value;

    private S3StorageClassEnum(String value) {
        this.value = value;
    }
}
