package openapisdk.models.shared;


public enum ImageRepositoryTypeEnum {
    ECR("ECR"),
    ECR_PUBLIC("ECR_PUBLIC");

    public final String value;

    private ImageRepositoryTypeEnum(String value) {
        this.value = value;
    }
}
