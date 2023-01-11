package openapisdk.models.shared;


public enum AppEntityAppTypeEnum {
    SDK("sdk"),
    SSO("sso"),
    REMOTE_SERVER("remote_server"),
    FOLDER_BEHAVIOR("folder_behavior"),
    CLIENT_APP("client_app"),
    APP_INTEGRATION("app_integration");

    public final String value;

    private AppEntityAppTypeEnum(String value) {
        this.value = value;
    }
}
