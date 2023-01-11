package openapisdk.models.shared;


public enum TemplateVersionStatusEnum {
    REGISTRATION_IN_PROGRESS("REGISTRATION_IN_PROGRESS"),
    REGISTRATION_FAILED("REGISTRATION_FAILED"),
    DRAFT("DRAFT"),
    PUBLISHED("PUBLISHED");

    public final String value;

    private TemplateVersionStatusEnum(String value) {
        this.value = value;
    }
}
