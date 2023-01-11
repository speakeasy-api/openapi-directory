package openapisdk.models.shared;


public enum SmbVersionEnum {
    AUTOMATIC("AUTOMATIC"),
    SMB2("SMB2"),
    SMB3("SMB3");

    public final String value;

    private SmbVersionEnum(String value) {
        this.value = value;
    }
}
