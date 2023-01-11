package openapisdk.models.shared;


public enum AppPkgSubscriptionTypeEnum {
    APP_PACKAGE_ON_BOARDING("AppPackageOnBoarding"),
    APP_PACAKGE_OPERATION_CHANGE("AppPacakgeOperationChange"),
    APP_PACKAGE_DELETION("AppPackageDeletion");

    public final String value;

    private AppPkgSubscriptionTypeEnum(String value) {
        this.value = value;
    }
}
