package openapisdk.models.shared;


public enum PatientEthnicityEnum {
    BLANK("blank"),
    HISPANIC("hispanic"),
    NOT_HISPANIC("not_hispanic"),
    DECLINED("declined");

    public final String value;

    private PatientEthnicityEnum(String value) {
        this.value = value;
    }
}
