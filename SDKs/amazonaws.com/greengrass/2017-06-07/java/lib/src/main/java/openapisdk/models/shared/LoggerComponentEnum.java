package openapisdk.models.shared;


public enum LoggerComponentEnum {
    GREENGRASS_SYSTEM("GreengrassSystem"),
    LAMBDA("Lambda");

    public final String value;

    private LoggerComponentEnum(String value) {
        this.value = value;
    }
}
