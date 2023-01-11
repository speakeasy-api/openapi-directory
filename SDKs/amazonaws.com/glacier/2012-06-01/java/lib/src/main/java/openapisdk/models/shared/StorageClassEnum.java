package openapisdk.models.shared;


public enum StorageClassEnum {
    STANDARD("STANDARD"),
    REDUCED_REDUNDANCY("REDUCED_REDUNDANCY"),
    STANDARD_IA("STANDARD_IA");

    public final String value;

    private StorageClassEnum(String value) {
        this.value = value;
    }
}
