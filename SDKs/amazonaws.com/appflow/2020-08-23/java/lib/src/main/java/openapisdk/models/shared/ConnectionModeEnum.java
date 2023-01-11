package openapisdk.models.shared;


public enum ConnectionModeEnum {
    PUBLIC_("Public"),
    PRIVATE_("Private");

    public final String value;

    private ConnectionModeEnum(String value) {
        this.value = value;
    }
}
