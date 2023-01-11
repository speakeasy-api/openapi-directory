package openapisdk.models.shared;


public enum UserPoolMfaTypeEnum {
    OFF("OFF"),
    ON("ON"),
    OPTIONAL("OPTIONAL");

    public final String value;

    private UserPoolMfaTypeEnum(String value) {
        this.value = value;
    }
}
