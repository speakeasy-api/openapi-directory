package openapisdk.models.shared;


public enum SmbSecurityDescriptorCopyFlagsEnum {
    NONE("NONE"),
    OWNER_DACL("OWNER_DACL"),
    OWNER_DACL_SACL("OWNER_DACL_SACL");

    public final String value;

    private SmbSecurityDescriptorCopyFlagsEnum(String value) {
        this.value = value;
    }
}
