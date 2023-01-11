package openapisdk.models.shared;


public enum EndpointTypesElementEnum {
    PUSH("PUSH"),
    GCM("GCM"),
    APNS("APNS"),
    APNS_SANDBOX("APNS_SANDBOX"),
    APNS_VOIP("APNS_VOIP"),
    APNS_VOIP_SANDBOX("APNS_VOIP_SANDBOX"),
    ADM("ADM"),
    SMS("SMS"),
    VOICE("VOICE"),
    EMAIL("EMAIL"),
    BAIDU("BAIDU"),
    CUSTOM("CUSTOM"),
    IN_APP("IN_APP");

    public final String value;

    private EndpointTypesElementEnum(String value) {
        this.value = value;
    }
}
