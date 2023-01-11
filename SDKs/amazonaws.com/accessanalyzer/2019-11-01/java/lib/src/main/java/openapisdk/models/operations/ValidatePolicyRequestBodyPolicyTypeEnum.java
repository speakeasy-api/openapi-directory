package openapisdk.models.operations;


public enum ValidatePolicyRequestBodyPolicyTypeEnum {
    IDENTITY_POLICY("IDENTITY_POLICY"),
    RESOURCE_POLICY("RESOURCE_POLICY"),
    SERVICE_CONTROL_POLICY("SERVICE_CONTROL_POLICY");

    public final String value;

    private ValidatePolicyRequestBodyPolicyTypeEnum(String value) {
        this.value = value;
    }
}
