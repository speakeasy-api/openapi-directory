package openapisdk.models.shared;


public enum ChangeServerLifeCycleStateSourceServerLifecycleStateEnum {
    READY_FOR_TEST("READY_FOR_TEST"),
    READY_FOR_CUTOVER("READY_FOR_CUTOVER"),
    CUTOVER("CUTOVER");

    public final String value;

    private ChangeServerLifeCycleStateSourceServerLifecycleStateEnum(String value) {
        this.value = value;
    }
}
