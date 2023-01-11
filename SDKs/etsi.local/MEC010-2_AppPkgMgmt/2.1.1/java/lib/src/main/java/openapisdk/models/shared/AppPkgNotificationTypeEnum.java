package openapisdk.models.shared;


public enum AppPkgNotificationTypeEnum {
    APP_PACKAGE_ON_BOARDED("AppPackageOnBoarded"),
    APP_PACAKGE_ENABLED("AppPacakgeEnabled"),
    APP_PACAKGE_DISABLED("AppPacakgeDisabled"),
    APP_PACKAGE_DELETED("AppPackageDeleted");

    public final String value;

    private AppPkgNotificationTypeEnum(String value) {
        this.value = value;
    }
}
