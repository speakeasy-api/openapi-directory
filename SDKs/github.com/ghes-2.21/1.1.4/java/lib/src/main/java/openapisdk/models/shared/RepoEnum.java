package openapisdk.models.shared;


public enum RepoEnum {
    OUTSIDE("outside"),
    DIRECT("direct"),
    ALL("all");

    public final String value;

    private RepoEnum(String value) {
        this.value = value;
    }
}
