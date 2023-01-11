package openapisdk.models.shared;


public enum SlotValueResolutionStrategyEnum {
    ORIGINAL_VALUE("OriginalValue"),
    TOP_RESOLUTION("TopResolution");

    public final String value;

    private SlotValueResolutionStrategyEnum(String value) {
        this.value = value;
    }
}
