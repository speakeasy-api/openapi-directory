package openapisdk.models.shared;


public enum ActionTypeEnum {
    APPLY_IAM_POLICY("APPLY_IAM_POLICY"),
    APPLY_SCP_POLICY("APPLY_SCP_POLICY"),
    RUN_SSM_DOCUMENTS("RUN_SSM_DOCUMENTS");

    public final String value;

    private ActionTypeEnum(String value) {
        this.value = value;
    }
}
