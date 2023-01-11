package openapisdk.models.shared;


public enum WorkloadImprovementStatusEnum {
    NOT_APPLICABLE("NOT_APPLICABLE"),
    NOT_STARTED("NOT_STARTED"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETE("COMPLETE"),
    RISK_ACKNOWLEDGED("RISK_ACKNOWLEDGED");

    public final String value;

    private WorkloadImprovementStatusEnum(String value) {
        this.value = value;
    }
}
