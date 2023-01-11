package openapisdk.models.shared;


public enum PrefixTypeEnum {
    FILENAME("FILENAME"),
    PATH("PATH"),
    PATH_AND_FILENAME("PATH_AND_FILENAME");

    public final String value;

    private PrefixTypeEnum(String value) {
        this.value = value;
    }
}
