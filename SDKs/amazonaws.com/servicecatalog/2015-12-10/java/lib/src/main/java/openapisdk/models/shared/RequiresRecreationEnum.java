package openapisdk.models.shared;


public enum RequiresRecreationEnum {
    NEVER("NEVER"),
    CONDITIONALLY("CONDITIONALLY"),
    ALWAYS("ALWAYS");

    public final String value;

    private RequiresRecreationEnum(String value) {
        this.value = value;
    }
}
