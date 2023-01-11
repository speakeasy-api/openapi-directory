package openapisdk.models.operations;


public enum ListGroupUsersSourceEnum {
    GOOGLE_CLASSROOM("googleClassroom"),
    MICROSOFT_GRAPH("microsoftGraph"),
    CLEVER("clever");

    public final String value;

    private ListGroupUsersSourceEnum(String value) {
        this.value = value;
    }
}
