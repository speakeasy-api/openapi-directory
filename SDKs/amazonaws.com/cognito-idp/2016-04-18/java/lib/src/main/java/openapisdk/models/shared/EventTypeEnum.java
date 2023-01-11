package openapisdk.models.shared;


public enum EventTypeEnum {
    SIGN_IN("SignIn"),
    SIGN_UP("SignUp"),
    FORGOT_PASSWORD("ForgotPassword");

    public final String value;

    private EventTypeEnum(String value) {
        this.value = value;
    }
}
