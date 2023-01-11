package openapisdk.models.shared;


public enum FormFieldEntityFieldTypeEnum {
    TEXT("text"),
    TEXT_AREA("text_area"),
    DROPDOWN("dropdown"),
    RADIO("radio");

    public final String value;

    private FormFieldEntityFieldTypeEnum(String value) {
        this.value = value;
    }
}
