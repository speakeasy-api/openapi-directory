package openapisdk.models.shared;


public enum IntegrationLinkTypeEnum {
    TRELLO("trello"),
    JIRA("jira");

    public final String value;

    private IntegrationLinkTypeEnum(String value) {
        this.value = value;
    }
}
