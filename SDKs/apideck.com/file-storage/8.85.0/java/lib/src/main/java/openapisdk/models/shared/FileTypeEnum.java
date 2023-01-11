package openapisdk.models.shared;


public enum FileTypeEnum {
    FILE("file"),
    FOLDER("folder"),
    URL("url");

    public final String value;

    private FileTypeEnum(String value) {
        this.value = value;
    }
}
