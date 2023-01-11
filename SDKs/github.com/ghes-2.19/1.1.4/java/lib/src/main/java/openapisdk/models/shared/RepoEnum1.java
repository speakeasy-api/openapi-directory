package openapisdk.models.shared;


public enum RepoEnum1 {
    NEWEST("newest"),
    OLDEST("oldest"),
    STARGAZERS("stargazers"),
    WATCHERS("watchers");

    public final String value;

    private RepoEnum1(String value) {
        this.value = value;
    }
}
