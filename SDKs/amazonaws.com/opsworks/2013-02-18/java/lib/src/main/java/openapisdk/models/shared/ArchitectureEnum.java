package openapisdk.models.shared;


public enum ArchitectureEnum {
    X8664("x86_64"),
    I386("i386");

    public final String value;

    private ArchitectureEnum(String value) {
        this.value = value;
    }
}
