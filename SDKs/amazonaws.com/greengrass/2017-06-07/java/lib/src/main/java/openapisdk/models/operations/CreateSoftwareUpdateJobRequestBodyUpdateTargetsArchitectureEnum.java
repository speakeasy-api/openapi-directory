package openapisdk.models.operations;


public enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum {
    ARMV6L("armv6l"),
    ARMV7L("armv7l"),
    X8664("x86_64"),
    AARCH64("aarch64");

    public final String value;

    private CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum(String value) {
        this.value = value;
    }
}
