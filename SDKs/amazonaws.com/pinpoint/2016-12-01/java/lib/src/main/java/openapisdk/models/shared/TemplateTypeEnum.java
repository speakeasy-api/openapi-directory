package openapisdk.models.shared;


public enum TemplateTypeEnum {
    EMAIL("EMAIL"),
    SMS("SMS"),
    VOICE("VOICE"),
    PUSH("PUSH"),
    INAPP("INAPP");

    public final String value;

    private TemplateTypeEnum(String value) {
        this.value = value;
    }
}
