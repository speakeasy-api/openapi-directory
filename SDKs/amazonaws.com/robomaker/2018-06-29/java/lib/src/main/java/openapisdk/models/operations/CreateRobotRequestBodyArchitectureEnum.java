package openapisdk.models.operations;


public enum CreateRobotRequestBodyArchitectureEnum {
    X8664("X86_64"),
    ARM64("ARM64"),
    ARMHF("ARMHF");

    public final String value;

    private CreateRobotRequestBodyArchitectureEnum(String value) {
        this.value = value;
    }
}
