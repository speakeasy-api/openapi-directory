package openapisdk.models.operations;


public enum ListSharesTypeEnum {
    RECEIVE("receive"),
    SHARED_FOLDER("shared_folder"),
    SEND("send");

    public final String value;

    private ListSharesTypeEnum(String value) {
        this.value = value;
    }
}
