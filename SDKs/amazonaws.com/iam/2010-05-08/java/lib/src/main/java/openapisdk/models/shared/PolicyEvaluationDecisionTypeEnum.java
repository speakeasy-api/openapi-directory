package openapisdk.models.shared;


public enum PolicyEvaluationDecisionTypeEnum {
    ALLOWED("allowed"),
    EXPLICIT_DENY("explicitDeny"),
    IMPLICIT_DENY("implicitDeny");

    public final String value;

    private PolicyEvaluationDecisionTypeEnum(String value) {
        this.value = value;
    }
}
