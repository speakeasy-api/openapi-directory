package openapisdk.models.operations;


public enum AddNotificationAddNotificationRequestBodyActionEnum {
    UPLOAD("upload"),
    DOWNLOAD("download"),
    DELETE("delete"),
    ALL("all");

    public final String value;

    private AddNotificationAddNotificationRequestBodyActionEnum(String value) {
        this.value = value;
    }
}
