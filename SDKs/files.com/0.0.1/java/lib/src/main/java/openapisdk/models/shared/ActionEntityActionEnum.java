package openapisdk.models.shared;


public enum ActionEntityActionEnum {
    CREATE("create"),
    READ("read"),
    UPDATE("update"),
    DESTROY("destroy"),
    MOVE("move"),
    LOGIN("login"),
    FAILEDLOGIN("failedlogin"),
    COPY("copy"),
    USER_CREATE("user_create"),
    USER_UPDATE("user_update"),
    USER_DESTROY("user_destroy"),
    GROUP_CREATE("group_create"),
    GROUP_UPDATE("group_update"),
    GROUP_DESTROY("group_destroy"),
    PERMISSION_CREATE("permission_create"),
    PERMISSION_DESTROY("permission_destroy"),
    API_KEY_CREATE("api_key_create"),
    API_KEY_UPDATE("api_key_update"),
    API_KEY_DESTROY("api_key_destroy");

    public final String value;

    private ActionEntityActionEnum(String value) {
        this.value = value;
    }
}
