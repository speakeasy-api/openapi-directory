package openapisdk.models.shared;


public enum ActionEntityInterfaceEnum {
    WEB("web"),
    FTP("ftp"),
    ROBOT("robot"),
    JSAPI("jsapi"),
    WEBDESKTOPAPI("webdesktopapi"),
    SFTP("sftp"),
    DAV("dav"),
    DESKTOP("desktop"),
    RESTAPI("restapi"),
    SCIM("scim"),
    OFFICE("office"),
    MOBILE("mobile");

    public final String value;

    private ActionEntityInterfaceEnum(String value) {
        this.value = value;
    }
}
