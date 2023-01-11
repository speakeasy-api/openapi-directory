package openapisdk.models.shared;


public enum RepoEnum2 {
    OPEN("open"),
    CLOSED("closed"),
    ALL("all");

    public final String value;

    private RepoEnum2(String value) {
        this.value = value;
    }
}
