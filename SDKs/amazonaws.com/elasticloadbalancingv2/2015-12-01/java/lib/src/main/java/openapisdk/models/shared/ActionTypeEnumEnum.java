package openapisdk.models.shared;


public enum ActionTypeEnumEnum {
    FORWARD("forward"),
    AUTHENTICATE_OIDC("authenticate-oidc"),
    AUTHENTICATE_COGNITO("authenticate-cognito"),
    REDIRECT("redirect"),
    FIXED_RESPONSE("fixed-response");

    public final String value;

    private ActionTypeEnumEnum(String value) {
        this.value = value;
    }
}
