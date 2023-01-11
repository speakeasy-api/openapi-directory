package openapisdk.models.shared;


public enum StorageConnectorTypeEnum {
    HOMEFOLDERS("HOMEFOLDERS"),
    GOOGLE_DRIVE("GOOGLE_DRIVE"),
    ONE_DRIVE("ONE_DRIVE");

    public final String value;

    private StorageConnectorTypeEnum(String value) {
        this.value = value;
    }
}
