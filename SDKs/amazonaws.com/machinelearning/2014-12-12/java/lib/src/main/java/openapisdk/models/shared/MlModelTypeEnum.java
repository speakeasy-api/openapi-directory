package openapisdk.models.shared;


public enum MlModelTypeEnum {
    REGRESSION("REGRESSION"),
    BINARY("BINARY"),
    MULTICLASS("MULTICLASS");

    public final String value;

    private MlModelTypeEnum(String value) {
        this.value = value;
    }
}
