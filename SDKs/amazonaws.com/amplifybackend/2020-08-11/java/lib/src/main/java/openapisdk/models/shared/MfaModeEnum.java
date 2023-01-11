package openapisdk.models.shared;


public enum MfaModeEnum {
    ON("ON"),
    OFF("OFF"),
    OPTIONAL("OPTIONAL");

    public final String value;

    private MfaModeEnum(String value) {
        this.value = value;
    }
}
