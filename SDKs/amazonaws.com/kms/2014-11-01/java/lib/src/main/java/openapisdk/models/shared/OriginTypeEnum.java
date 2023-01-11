package openapisdk.models.shared;


public enum OriginTypeEnum {
    AWS_KMS("AWS_KMS"),
    EXTERNAL("EXTERNAL"),
    AWS_CLOUDHSM("AWS_CLOUDHSM");

    public final String value;

    private OriginTypeEnum(String value) {
        this.value = value;
    }
}
