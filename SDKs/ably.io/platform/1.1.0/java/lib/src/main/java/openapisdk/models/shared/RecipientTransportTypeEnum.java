package openapisdk.models.shared;


public enum RecipientTransportTypeEnum {
    APNS("apns"),
    FCM("fcm"),
    GCM("gcm");

    public final String value;

    private RecipientTransportTypeEnum(String value) {
        this.value = value;
    }
}
