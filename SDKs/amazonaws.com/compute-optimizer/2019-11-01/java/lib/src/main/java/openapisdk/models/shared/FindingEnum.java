package openapisdk.models.shared;


public enum FindingEnum {
    UNDERPROVISIONED("Underprovisioned"),
    OVERPROVISIONED("Overprovisioned"),
    OPTIMIZED("Optimized"),
    NOT_OPTIMIZED("NotOptimized");

    public final String value;

    private FindingEnum(String value) {
        this.value = value;
    }
}
