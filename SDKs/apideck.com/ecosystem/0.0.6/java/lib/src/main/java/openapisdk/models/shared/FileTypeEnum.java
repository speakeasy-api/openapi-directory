package openapisdk.models.shared;


public enum FileTypeEnum {
    LOGO("LOGO"),
    BANNER("BANNER"),
    SCREENSHOT("SCREENSHOT");

    public final String value;

    private FileTypeEnum(String value) {
        this.value = value;
    }
}
