package openapisdk.models.shared;


public enum ProvisionTargetTypeEnum {
    AWS_ACCOUNT("AWS_ACCOUNT"),
    ALL_PROVISIONED_ACCOUNTS("ALL_PROVISIONED_ACCOUNTS");

    public final String value;

    private ProvisionTargetTypeEnum(String value) {
        this.value = value;
    }
}
