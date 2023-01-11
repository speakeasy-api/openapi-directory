package openapisdk.models.shared;


public enum PackageTypeEnum {
    ZIP("Zip"),
    IMAGE("Image");

    public final String value;

    private PackageTypeEnum(String value) {
        this.value = value;
    }
}
