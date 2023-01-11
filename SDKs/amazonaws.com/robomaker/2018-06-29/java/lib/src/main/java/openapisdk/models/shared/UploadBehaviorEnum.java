package openapisdk.models.shared;


public enum UploadBehaviorEnum {
    UPLOAD_ON_TERMINATE("UPLOAD_ON_TERMINATE"),
    UPLOAD_ROLLING_AUTO_REMOVE("UPLOAD_ROLLING_AUTO_REMOVE");

    public final String value;

    private UploadBehaviorEnum(String value) {
        this.value = value;
    }
}
