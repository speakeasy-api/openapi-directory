package openapisdk.models.shared;


public enum LayerFailureCodeEnum {
    INVALID_LAYER_DIGEST("InvalidLayerDigest"),
    MISSING_LAYER_DIGEST("MissingLayerDigest");

    public final String value;

    private LayerFailureCodeEnum(String value) {
        this.value = value;
    }
}
