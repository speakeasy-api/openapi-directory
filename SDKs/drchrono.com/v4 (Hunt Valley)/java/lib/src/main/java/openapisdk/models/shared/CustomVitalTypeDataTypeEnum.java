package openapisdk.models.shared;


public enum CustomVitalTypeDataTypeEnum {
    TEXT("text"),
    NUMBER("number"),
    SINGLE_SEL("single_sel");

    public final String value;

    private CustomVitalTypeDataTypeEnum(String value) {
        this.value = value;
    }
}
