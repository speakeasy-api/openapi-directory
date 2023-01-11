package openapisdk.models.shared;


public enum TargetTypeEnum {
    TLS_SNI("TLS_SNI"),
    HTTP_HOST("HTTP_HOST");

    public final String value;

    private TargetTypeEnum(String value) {
        this.value = value;
    }
}
