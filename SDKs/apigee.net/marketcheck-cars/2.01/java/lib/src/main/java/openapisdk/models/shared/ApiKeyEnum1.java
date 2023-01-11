package openapisdk.models.shared;


public enum ApiKeyEnum1 {
    US_LOWER("us"),
    CA_LOWER("ca"),
    US_UPPER("US"),
    CA_UPPER("CA");

    public final String value;

    private ApiKeyEnum1(String value) {
        this.value = value;
    }
}
