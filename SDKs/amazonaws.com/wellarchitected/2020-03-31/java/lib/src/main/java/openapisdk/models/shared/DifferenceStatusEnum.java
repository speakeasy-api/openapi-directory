package openapisdk.models.shared;


public enum DifferenceStatusEnum {
    UPDATED("UPDATED"),
    NEW_("NEW"),
    DELETED("DELETED");

    public final String value;

    private DifferenceStatusEnum(String value) {
        this.value = value;
    }
}
