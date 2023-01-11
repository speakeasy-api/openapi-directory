package openapisdk.models.shared;


public enum AssetTypeEnum {
    NOT_SET("NotSet"),
    IMAGE("Image"),
    FILM("Film"),
    MUSIC("Music");

    public final String value;

    private AssetTypeEnum(String value) {
        this.value = value;
    }
}
