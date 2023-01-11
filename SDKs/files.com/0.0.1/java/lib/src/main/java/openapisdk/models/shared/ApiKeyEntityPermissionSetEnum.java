package openapisdk.models.shared;


public enum ApiKeyEntityPermissionSetEnum {
    NONE("none"),
    FULL("full"),
    DESKTOP_APP("desktop_app"),
    SYNC_APP("sync_app"),
    OFFICE_INTEGRATION("office_integration"),
    MOBILE_APP("mobile_app");

    public final String value;

    private ApiKeyEntityPermissionSetEnum(String value) {
        this.value = value;
    }
}
