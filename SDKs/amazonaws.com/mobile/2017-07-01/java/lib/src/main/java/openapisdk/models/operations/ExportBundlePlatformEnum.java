package openapisdk.models.operations;


public enum ExportBundlePlatformEnum {
    OSX("OSX"),
    WINDOWS("WINDOWS"),
    LINUX("LINUX"),
    OBJC("OBJC"),
    SWIFT("SWIFT"),
    ANDROID("ANDROID"),
    JAVASCRIPT("JAVASCRIPT");

    public final String value;

    private ExportBundlePlatformEnum(String value) {
        this.value = value;
    }
}
