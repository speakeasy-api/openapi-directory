package openapisdk.models.shared;


public enum SlotConstraintEnum {
    REQUIRED("Required"),
    OPTIONAL("Optional");

    public final String value;

    private SlotConstraintEnum(String value) {
        this.value = value;
    }
}
