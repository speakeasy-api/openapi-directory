package openapisdk.models.shared;


public enum FindingReasonCodeEnum {
    MEMORY_OVERPROVISIONED("MemoryOverprovisioned"),
    MEMORY_UNDERPROVISIONED("MemoryUnderprovisioned");

    public final String value;

    private FindingReasonCodeEnum(String value) {
        this.value = value;
    }
}
