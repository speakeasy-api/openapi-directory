package openapisdk.models.shared;


public enum IntegrationTypeEnum {
    SEND_FINDINGS_TO_SECURITY_HUB("SEND_FINDINGS_TO_SECURITY_HUB"),
    RECEIVE_FINDINGS_FROM_SECURITY_HUB("RECEIVE_FINDINGS_FROM_SECURITY_HUB"),
    UPDATE_FINDINGS_IN_SECURITY_HUB("UPDATE_FINDINGS_IN_SECURITY_HUB");

    public final String value;

    private IntegrationTypeEnum(String value) {
        this.value = value;
    }
}
