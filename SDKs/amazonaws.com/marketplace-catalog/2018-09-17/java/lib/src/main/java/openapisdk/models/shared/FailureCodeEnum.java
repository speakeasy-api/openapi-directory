package openapisdk.models.shared;


public enum FailureCodeEnum {
    CLIENT_ERROR("CLIENT_ERROR"),
    SERVER_FAULT("SERVER_FAULT");

    public final String value;

    private FailureCodeEnum(String value) {
        this.value = value;
    }
}
