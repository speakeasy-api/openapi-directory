package openapisdk.models.shared;


public enum ExpirationModelTypeEnum {
    KEY_MATERIAL_EXPIRES("KEY_MATERIAL_EXPIRES"),
    KEY_MATERIAL_DOES_NOT_EXPIRE("KEY_MATERIAL_DOES_NOT_EXPIRE");

    public final String value;

    private ExpirationModelTypeEnum(String value) {
        this.value = value;
    }
}
