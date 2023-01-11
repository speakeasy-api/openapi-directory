package openapisdk.models.shared;


public enum IdentityProviderTypeEnum {
    SERVICE_MANAGED("SERVICE_MANAGED"),
    API_GATEWAY("API_GATEWAY"),
    AWS_DIRECTORY_SERVICE("AWS_DIRECTORY_SERVICE");

    public final String value;

    private IdentityProviderTypeEnum(String value) {
        this.value = value;
    }
}
