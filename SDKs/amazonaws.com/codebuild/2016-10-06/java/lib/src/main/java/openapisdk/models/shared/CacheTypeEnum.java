package openapisdk.models.shared;


public enum CacheTypeEnum {
    NO_CACHE("NO_CACHE"),
    S3("S3"),
    LOCAL("LOCAL");

    public final String value;

    private CacheTypeEnum(String value) {
        this.value = value;
    }
}
