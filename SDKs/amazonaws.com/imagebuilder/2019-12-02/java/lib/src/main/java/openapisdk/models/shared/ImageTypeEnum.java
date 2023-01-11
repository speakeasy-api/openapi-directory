package openapisdk.models.shared;


public enum ImageTypeEnum {
    AMI("AMI"),
    DOCKER("DOCKER");

    public final String value;

    private ImageTypeEnum(String value) {
        this.value = value;
    }
}
