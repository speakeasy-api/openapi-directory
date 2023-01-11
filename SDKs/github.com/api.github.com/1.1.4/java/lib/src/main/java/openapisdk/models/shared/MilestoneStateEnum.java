package openapisdk.models.shared;


public enum MilestoneStateEnum {
    OPEN("open"),
    CLOSED("closed");

    public final String value;

    private MilestoneStateEnum(String value) {
        this.value = value;
    }
}
