package openapisdk.models.shared;


public enum Icd10CmAttributeTypeEnum {
    ACUITY("ACUITY"),
    DIRECTION("DIRECTION"),
    SYSTEM_ORGAN_SITE("SYSTEM_ORGAN_SITE"),
    QUALITY("QUALITY"),
    QUANTITY("QUANTITY"),
    TIME_TO_DX_NAME("TIME_TO_DX_NAME"),
    TIME_EXPRESSION("TIME_EXPRESSION");

    public final String value;

    private Icd10CmAttributeTypeEnum(String value) {
        this.value = value;
    }
}
