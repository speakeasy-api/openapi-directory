package openapisdk.models.shared;


public enum PlatformEnum {
    OSX("OSX"),
    WINDOWS("WINDOWS"),
    LINUX("LINUX"),
    OBJC("OBJC"),
    SWIFT("SWIFT"),
    ANDROID("ANDROID"),
    JAVASCRIPT("JAVASCRIPT");

    public final String value;

    private PlatformEnum(String value) {
        this.value = value;
    }
}
