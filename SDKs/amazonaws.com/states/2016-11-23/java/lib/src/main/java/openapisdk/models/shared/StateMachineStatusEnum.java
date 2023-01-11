package openapisdk.models.shared;


public enum StateMachineStatusEnum {
    ACTIVE("ACTIVE"),
    DELETING("DELETING");

    public final String value;

    private StateMachineStatusEnum(String value) {
        this.value = value;
    }
}
