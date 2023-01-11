package openapisdk.models.operations;


public enum UpdateWorkloadRequestBodyImprovementStatusEnum {
    NOT_APPLICABLE("NOT_APPLICABLE"),
    NOT_STARTED("NOT_STARTED"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETE("COMPLETE"),
    RISK_ACKNOWLEDGED("RISK_ACKNOWLEDGED");

    public final String value;

    private UpdateWorkloadRequestBodyImprovementStatusEnum(String value) {
        this.value = value;
    }
}
