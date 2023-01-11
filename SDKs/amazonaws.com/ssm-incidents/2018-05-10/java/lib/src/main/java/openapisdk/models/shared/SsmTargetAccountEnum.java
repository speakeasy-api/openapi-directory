package openapisdk.models.shared;


public enum SsmTargetAccountEnum {
    RESPONSE_PLAN_OWNER_ACCOUNT("RESPONSE_PLAN_OWNER_ACCOUNT"),
    IMPACTED_ACCOUNT("IMPACTED_ACCOUNT");

    public final String value;

    private SsmTargetAccountEnum(String value) {
        this.value = value;
    }
}
