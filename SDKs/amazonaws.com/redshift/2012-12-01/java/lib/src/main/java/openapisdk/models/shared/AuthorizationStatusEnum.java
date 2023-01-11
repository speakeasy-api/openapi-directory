package openapisdk.models.shared;


public enum AuthorizationStatusEnum {
    AUTHORIZED("Authorized"),
    REVOKING("Revoking");

    public final String value;

    private AuthorizationStatusEnum(String value) {
        this.value = value;
    }
}
