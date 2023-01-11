package openapisdk.models.shared;


public enum TenancyEnum {
    DEDICATED("DEDICATED"),
    SHARED("SHARED");

    public final String value;

    private TenancyEnum(String value) {
        this.value = value;
    }
}
