package openapisdk.models.shared;


public enum OrgEnum {
    ASSIGNED("assigned"),
    CREATED("created"),
    MENTIONED("mentioned"),
    SUBSCRIBED("subscribed"),
    REPOS("repos"),
    ALL("all");

    public final String value;

    private OrgEnum(String value) {
        this.value = value;
    }
}
