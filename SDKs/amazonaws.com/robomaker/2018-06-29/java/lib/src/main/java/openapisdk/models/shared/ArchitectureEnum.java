package openapisdk.models.shared;


public enum ArchitectureEnum {
    X8664("X86_64"),
    ARM64("ARM64"),
    ARMHF("ARMHF");

    public final String value;

    private ArchitectureEnum(String value) {
        this.value = value;
    }
}
