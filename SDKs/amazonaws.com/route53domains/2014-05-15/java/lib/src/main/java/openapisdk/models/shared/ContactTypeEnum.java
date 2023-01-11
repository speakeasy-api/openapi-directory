package openapisdk.models.shared;


public enum ContactTypeEnum {
    PERSON("PERSON"),
    COMPANY("COMPANY"),
    ASSOCIATION("ASSOCIATION"),
    PUBLIC_BODY("PUBLIC_BODY"),
    RESELLER("RESELLER");

    public final String value;

    private ContactTypeEnum(String value) {
        this.value = value;
    }
}
