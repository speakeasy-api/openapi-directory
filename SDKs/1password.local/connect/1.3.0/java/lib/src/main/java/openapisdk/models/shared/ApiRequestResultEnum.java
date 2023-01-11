package openapisdk.models.shared;


public enum ApiRequestResultEnum {
    SUCCESS("SUCCESS"),
    DENY("DENY");

    public final String value;

    private ApiRequestResultEnum(String value) {
        this.value = value;
    }
}
