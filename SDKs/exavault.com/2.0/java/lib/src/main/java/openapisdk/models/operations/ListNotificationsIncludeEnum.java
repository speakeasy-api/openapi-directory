package openapisdk.models.operations;


public enum ListNotificationsIncludeEnum {
    RESOURCE("resource"),
    SHARE("share"),
    USER("user");

    public final String value;

    private ListNotificationsIncludeEnum(String value) {
        this.value = value;
    }
}
