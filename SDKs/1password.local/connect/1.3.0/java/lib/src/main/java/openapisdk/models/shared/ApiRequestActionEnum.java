package openapisdk.models.shared;


public enum ApiRequestActionEnum {
    READ("READ"),
    CREATE("CREATE"),
    UPDATE("UPDATE"),
    DELETE("DELETE");

    public final String value;

    private ApiRequestActionEnum(String value) {
        this.value = value;
    }
}
