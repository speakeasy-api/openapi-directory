package openapisdk.models.shared;


public enum CacheModeEnum {
    LOCAL_DOCKER_LAYER_CACHE("LOCAL_DOCKER_LAYER_CACHE"),
    LOCAL_SOURCE_CACHE("LOCAL_SOURCE_CACHE"),
    LOCAL_CUSTOM_CACHE("LOCAL_CUSTOM_CACHE");

    public final String value;

    private CacheModeEnum(String value) {
        this.value = value;
    }
}
