package openapisdk.models.shared;


public enum StageTransitionTypeEnum {
    INBOUND("Inbound"),
    OUTBOUND("Outbound");

    public final String value;

    private StageTransitionTypeEnum(String value) {
        this.value = value;
    }
}
