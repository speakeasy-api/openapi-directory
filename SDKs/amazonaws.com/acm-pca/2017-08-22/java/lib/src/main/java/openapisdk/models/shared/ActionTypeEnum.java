package openapisdk.models.shared;


public enum ActionTypeEnum {
    ISSUE_CERTIFICATE("IssueCertificate"),
    GET_CERTIFICATE("GetCertificate"),
    LIST_PERMISSIONS("ListPermissions");

    public final String value;

    private ActionTypeEnum(String value) {
        this.value = value;
    }
}
