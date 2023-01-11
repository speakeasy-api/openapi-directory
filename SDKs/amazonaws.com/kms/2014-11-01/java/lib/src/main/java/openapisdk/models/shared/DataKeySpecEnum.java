package openapisdk.models.shared;


public enum DataKeySpecEnum {
    AES256("AES_256"),
    AES128("AES_128");

    public final String value;

    private DataKeySpecEnum(String value) {
        this.value = value;
    }
}
