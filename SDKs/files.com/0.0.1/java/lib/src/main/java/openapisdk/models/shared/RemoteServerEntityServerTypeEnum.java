package openapisdk.models.shared;


public enum RemoteServerEntityServerTypeEnum {
    FTP("ftp"),
    SFTP("sftp"),
    S3("s3"),
    GOOGLE_CLOUD_STORAGE("google_cloud_storage"),
    WEBDAV("webdav"),
    WASABI("wasabi"),
    BACKBLAZE_B2("backblaze_b2"),
    ONE_DRIVE("one_drive"),
    RACKSPACE("rackspace"),
    BOX("box"),
    DROPBOX("dropbox"),
    GOOGLE_DRIVE("google_drive"),
    AZURE("azure"),
    SHAREPOINT("sharepoint"),
    S3_COMPATIBLE("s3_compatible");

    public final String value;

    private RemoteServerEntityServerTypeEnum(String value) {
        this.value = value;
    }
}
