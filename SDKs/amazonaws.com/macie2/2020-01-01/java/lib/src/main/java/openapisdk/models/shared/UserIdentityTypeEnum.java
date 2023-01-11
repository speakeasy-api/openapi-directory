package openapisdk.models.shared;


public enum UserIdentityTypeEnum {
    ASSUMED_ROLE("AssumedRole"),
    IAM_USER("IAMUser"),
    FEDERATED_USER("FederatedUser"),
    ROOT("Root"),
    AWS_ACCOUNT("AWSAccount"),
    AWS_SERVICE("AWSService");

    public final String value;

    private UserIdentityTypeEnum(String value) {
        this.value = value;
    }
}
