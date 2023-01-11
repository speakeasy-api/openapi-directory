package openapisdk.models.shared;


public enum AuthTypeEnum {
    OAUTH("OAUTH"),
    BASIC_AUTH("BASIC_AUTH"),
    PERSONAL_ACCESS_TOKEN("PERSONAL_ACCESS_TOKEN");

    public final String value;

    private AuthTypeEnum(String value) {
        this.value = value;
    }
}
