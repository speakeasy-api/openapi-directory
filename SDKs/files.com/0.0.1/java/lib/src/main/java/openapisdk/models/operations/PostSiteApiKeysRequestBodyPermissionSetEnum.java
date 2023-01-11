package openapisdk.models.operations;


public enum PostSiteApiKeysRequestBodyPermissionSetEnum {
    NONE("none"),
    FULL("full"),
    DESKTOP_APP("desktop_app"),
    SYNC_APP("sync_app"),
    OFFICE_INTEGRATION("office_integration"),
    MOBILE_APP("mobile_app");

    public final String value;

    private PostSiteApiKeysRequestBodyPermissionSetEnum(String value) {
        this.value = value;
    }
}
