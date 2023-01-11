package openapisdk.models.shared;


public enum UsernameEnum {
    ORGANIZATION("organization"),
    REPOSITORY("repository"),
    ISSUE("issue"),
    PULL_REQUEST("pull_request");

    public final String value;

    private UsernameEnum(String value) {
        this.value = value;
    }
}
