package openapisdk.models.shared;


public enum EventFilterTypeEnum {
    SIGN_IN("SIGN_IN"),
    PASSWORD_CHANGE("PASSWORD_CHANGE"),
    SIGN_UP("SIGN_UP");

    public final String value;

    private EventFilterTypeEnum(String value) {
        this.value = value;
    }
}
