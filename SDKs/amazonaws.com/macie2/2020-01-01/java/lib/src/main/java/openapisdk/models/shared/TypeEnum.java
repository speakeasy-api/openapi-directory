package openapisdk.models.shared;


public enum TypeEnum {
    NONE("NONE"),
    AES256("AES256"),
    AWS_KMS("aws:kms");

    public final String value;

    private TypeEnum(String value) {
        this.value = value;
    }
}
