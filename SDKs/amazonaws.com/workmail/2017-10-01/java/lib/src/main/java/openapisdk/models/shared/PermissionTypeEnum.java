package openapisdk.models.shared;


public enum PermissionTypeEnum {
    FULL_ACCESS("FULL_ACCESS"),
    SEND_AS("SEND_AS"),
    SEND_ON_BEHALF("SEND_ON_BEHALF");

    public final String value;

    private PermissionTypeEnum(String value) {
        this.value = value;
    }
}
