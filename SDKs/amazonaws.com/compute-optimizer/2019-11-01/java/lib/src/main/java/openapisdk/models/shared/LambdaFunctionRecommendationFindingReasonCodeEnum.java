package openapisdk.models.shared;


public enum LambdaFunctionRecommendationFindingReasonCodeEnum {
    MEMORY_OVERPROVISIONED("MemoryOverprovisioned"),
    MEMORY_UNDERPROVISIONED("MemoryUnderprovisioned"),
    INSUFFICIENT_DATA("InsufficientData"),
    INCONCLUSIVE("Inconclusive");

    public final String value;

    private LambdaFunctionRecommendationFindingReasonCodeEnum(String value) {
        this.value = value;
    }
}
