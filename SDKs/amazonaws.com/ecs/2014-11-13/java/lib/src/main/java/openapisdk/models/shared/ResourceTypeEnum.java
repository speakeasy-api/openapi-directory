package openapisdk.models.shared;


public enum ResourceTypeEnum {
    GPU("GPU"),
    INFERENCE_ACCELERATOR("InferenceAccelerator");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
