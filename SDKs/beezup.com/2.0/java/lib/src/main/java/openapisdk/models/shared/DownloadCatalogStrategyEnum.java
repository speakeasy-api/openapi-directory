package openapisdk.models.shared;


public enum DownloadCatalogStrategyEnum {
    SIMPLE_URI("SimpleUri"),
    FTP_LATEST("FtpLatest"),
    SFTP("Sftp"),
    SFTP_LATEST("SftpLatest"),
    FTPS("Ftps"),
    FTPS_LATEST("FtpsLatest"),
    LOCAL("Local");

    public final String value;

    private DownloadCatalogStrategyEnum(String value) {
        this.value = value;
    }
}
