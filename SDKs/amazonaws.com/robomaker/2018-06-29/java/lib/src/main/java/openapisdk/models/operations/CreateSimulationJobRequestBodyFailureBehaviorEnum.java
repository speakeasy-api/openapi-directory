package openapisdk.models.operations;


public enum CreateSimulationJobRequestBodyFailureBehaviorEnum {
    FAIL("Fail"),
    CONTINUE_("Continue");

    public final String value;

    private CreateSimulationJobRequestBodyFailureBehaviorEnum(String value) {
        this.value = value;
    }
}
