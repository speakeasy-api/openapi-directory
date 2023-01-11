package openapisdk.models.shared;


public enum CmkTypeEnum {
    CUSTOMER_MANAGED_KMS_KEY("CUSTOMER_MANAGED_KMS_KEY"),
    AWS_OWNED_KMS_KEY("AWS_OWNED_KMS_KEY");

    public final String value;

    private CmkTypeEnum(String value) {
        this.value = value;
    }
}
