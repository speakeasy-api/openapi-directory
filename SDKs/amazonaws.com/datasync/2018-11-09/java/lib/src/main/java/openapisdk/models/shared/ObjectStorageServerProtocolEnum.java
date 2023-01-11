package openapisdk.models.shared;


public enum ObjectStorageServerProtocolEnum {
    HTTPS("HTTPS"),
    HTTP("HTTP");

    public final String value;

    private ObjectStorageServerProtocolEnum(String value) {
        this.value = value;
    }
}
