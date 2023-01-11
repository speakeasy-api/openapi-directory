package openapisdk.models.shared;


public enum ProtocolEnum {
    SFTP("SFTP"),
    FTP("FTP"),
    FTPS("FTPS");

    public final String value;

    private ProtocolEnum(String value) {
        this.value = value;
    }
}
