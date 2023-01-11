package openapisdk.models.shared;


public enum CatalogStoreStatusEnum {
    OK("OK"),
    FAILED("Failed"),
    OUTDATED("Outdated");

    public final String value;

    private CatalogStoreStatusEnum(String value) {
        this.value = value;
    }
}
