package openapisdk.models.shared;


public enum AuthTokenUpdateStatusEnum {
    SETTING("SETTING"),
    ROTATING("ROTATING");

    public final String value;

    private AuthTokenUpdateStatusEnum(String value) {
        this.value = value;
    }
}
