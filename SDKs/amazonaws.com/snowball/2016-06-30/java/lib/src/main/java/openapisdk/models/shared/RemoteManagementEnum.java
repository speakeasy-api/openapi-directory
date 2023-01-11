package openapisdk.models.shared;


public enum RemoteManagementEnum {
    INSTALLED_ONLY("INSTALLED_ONLY"),
    INSTALLED_AUTOSTART("INSTALLED_AUTOSTART");

    public final String value;

    private RemoteManagementEnum(String value) {
        this.value = value;
    }
}
