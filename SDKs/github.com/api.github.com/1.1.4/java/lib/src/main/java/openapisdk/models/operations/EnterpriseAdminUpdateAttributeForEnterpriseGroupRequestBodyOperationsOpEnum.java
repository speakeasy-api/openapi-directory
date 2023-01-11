package openapisdk.models.operations;


public enum EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum {
    ADD_LOWER("add"),
    ADD_MIXED("Add"),
    REMOVE_LOWER("remove"),
    REMOVE_MIXED("Remove"),
    REPLACE_LOWER("replace"),
    REPLACE_MIXED("Replace");

    public final String value;

    private EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum(String value) {
        this.value = value;
    }
}
