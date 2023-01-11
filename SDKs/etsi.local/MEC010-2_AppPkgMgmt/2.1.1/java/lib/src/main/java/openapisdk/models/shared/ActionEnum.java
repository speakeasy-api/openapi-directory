package openapisdk.models.shared;


public enum ActionEnum {
    DROP("DROP"),
    FORWARD_DECAPSULATED("FORWARD_DECAPSULATED"),
    FORWARD_AS_IS("FORWARD_AS_IS"),
    PASSTHROUGH("PASSTHROUGH"),
    DUPLICATED_DECAPSULATED("DUPLICATED_DECAPSULATED"),
    DUPLICATE_AS_IS("DUPLICATE_AS_IS");

    public final String value;

    private ActionEnum(String value) {
        this.value = value;
    }
}
