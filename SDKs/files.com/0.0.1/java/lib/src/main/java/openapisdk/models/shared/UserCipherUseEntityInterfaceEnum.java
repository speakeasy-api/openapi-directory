package openapisdk.models.shared;


public enum UserCipherUseEntityInterfaceEnum {
    WEB("web"),
    FTP("ftp"),
    SFTP("sftp"),
    DAV("dav"),
    DESKTOP("desktop"),
    RESTAPI("restapi"),
    ROBOT("robot"),
    JSAPI("jsapi");

    public final String value;

    private UserCipherUseEntityInterfaceEnum(String value) {
        this.value = value;
    }
}
