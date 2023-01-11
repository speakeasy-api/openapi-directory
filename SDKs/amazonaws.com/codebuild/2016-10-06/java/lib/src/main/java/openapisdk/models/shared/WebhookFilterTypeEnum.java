package openapisdk.models.shared;


public enum WebhookFilterTypeEnum {
    EVENT("EVENT"),
    BASE_REF("BASE_REF"),
    HEAD_REF("HEAD_REF"),
    ACTOR_ACCOUNT_ID("ACTOR_ACCOUNT_ID"),
    FILE_PATH("FILE_PATH"),
    COMMIT_MESSAGE("COMMIT_MESSAGE");

    public final String value;

    private WebhookFilterTypeEnum(String value) {
        this.value = value;
    }
}
