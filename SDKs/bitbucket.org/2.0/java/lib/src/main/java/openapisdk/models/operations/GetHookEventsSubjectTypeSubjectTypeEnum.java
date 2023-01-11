package openapisdk.models.operations;


public enum GetHookEventsSubjectTypeSubjectTypeEnum {
    WORKSPACE("workspace"),
    USER("user"),
    REPOSITORY("repository"),
    TEAM("team");

    public final String value;

    private GetHookEventsSubjectTypeSubjectTypeEnum(String value) {
        this.value = value;
    }
}
