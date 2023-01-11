package openapisdk.models.operations;


public enum PutStorageConfigurationRequestBodyStorageTypeEnum {
    SITEWISE_DEFAULT_STORAGE("SITEWISE_DEFAULT_STORAGE"),
    MULTI_LAYER_STORAGE("MULTI_LAYER_STORAGE");

    public final String value;

    private PutStorageConfigurationRequestBodyStorageTypeEnum(String value) {
        this.value = value;
    }
}
