package openapisdk.models.shared;


public enum StorageClassEnum {
    STANDARD("STANDARD"),
    REDUCED_REDUNDANCY("REDUCED_REDUNDANCY"),
    STANDARD_IA("STANDARD_IA"),
    INTELLIGENT_TIERING("INTELLIGENT_TIERING"),
    DEEP_ARCHIVE("DEEP_ARCHIVE"),
    ONEZONE_IA("ONEZONE_IA"),
    GLACIER("GLACIER");

    public final String value;

    private StorageClassEnum(String value) {
        this.value = value;
    }
}
