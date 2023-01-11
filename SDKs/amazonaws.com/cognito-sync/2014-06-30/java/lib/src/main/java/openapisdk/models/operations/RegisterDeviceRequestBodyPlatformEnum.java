package openapisdk.models.operations;


public enum RegisterDeviceRequestBodyPlatformEnum {
    APNS("APNS"),
    APNS_SANDBOX("APNS_SANDBOX"),
    GCM("GCM"),
    ADM("ADM");

    public final String value;

    private RegisterDeviceRequestBodyPlatformEnum(String value) {
        this.value = value;
    }
}
