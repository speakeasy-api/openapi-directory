package openapisdk.models.operations;


public enum ListNotificationsActionEnum {
    CONNECT("connect"),
    DOWNLOAD("download"),
    UPLOAD("upload"),
    DELETE("delete"),
    ALL("all");

    public final String value;

    private ListNotificationsActionEnum(String value) {
        this.value = value;
    }
}
