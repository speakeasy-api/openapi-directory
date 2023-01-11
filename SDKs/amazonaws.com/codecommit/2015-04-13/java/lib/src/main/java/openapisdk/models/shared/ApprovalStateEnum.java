package openapisdk.models.shared;


public enum ApprovalStateEnum {
    APPROVE("APPROVE"),
    REVOKE("REVOKE");

    public final String value;

    private ApprovalStateEnum(String value) {
        this.value = value;
    }
}
