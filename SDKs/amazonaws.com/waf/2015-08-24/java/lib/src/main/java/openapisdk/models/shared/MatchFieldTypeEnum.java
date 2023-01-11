package openapisdk.models.shared;


public enum MatchFieldTypeEnum {
    URI("URI"),
    QUERY_STRING("QUERY_STRING"),
    HEADER("HEADER"),
    METHOD("METHOD"),
    BODY("BODY"),
    SINGLE_QUERY_ARG("SINGLE_QUERY_ARG"),
    ALL_QUERY_ARGS("ALL_QUERY_ARGS");

    public final String value;

    private MatchFieldTypeEnum(String value) {
        this.value = value;
    }
}
