package openapisdk.models.shared;


public enum ShareAttributesTypeEnum {
    SHARED_FOLDER("shared_folder"),
    SEND("send"),
    RECEIVE("receive");

    public final String value;

    private ShareAttributesTypeEnum(String value) {
        this.value = value;
    }
}
