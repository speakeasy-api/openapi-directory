package openapisdk.models.operations;


public enum SearchReposSortEnum {
    STARS("stars"),
    FORKS("forks"),
    HELP_WANTED_ISSUES("help-wanted-issues"),
    UPDATED("updated");

    public final String value;

    private SearchReposSortEnum(String value) {
        this.value = value;
    }
}
