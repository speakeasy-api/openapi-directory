package openapisdk.models.shared;


public enum FileModeTypeEnumEnum {
    EXECUTABLE("EXECUTABLE"),
    NORMAL("NORMAL"),
    SYMLINK("SYMLINK");

    public final String value;

    private FileModeTypeEnumEnum(String value) {
        this.value = value;
    }
}
