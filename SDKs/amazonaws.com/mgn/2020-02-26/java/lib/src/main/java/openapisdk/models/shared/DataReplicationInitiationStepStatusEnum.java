package openapisdk.models.shared;


public enum DataReplicationInitiationStepStatusEnum {
    NOT_STARTED("NOT_STARTED"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    SKIPPED("SKIPPED");

    public final String value;

    private DataReplicationInitiationStepStatusEnum(String value) {
        this.value = value;
    }
}
