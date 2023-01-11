package openapisdk.models.operations;


public enum ListDirectoriesRequestBodyStateEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    DELETED("DELETED");

    public final String value;

    private ListDirectoriesRequestBodyStateEnum(String value) {
        this.value = value;
    }
}
