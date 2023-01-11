package openapisdk.models.shared;


public enum ServiceTypeEnum {
    DATA("DATA"),
    CREDENTIAL_PROVIDER("CREDENTIAL_PROVIDER"),
    JOBS("JOBS");

    public final String value;

    private ServiceTypeEnum(String value) {
        this.value = value;
    }
}
