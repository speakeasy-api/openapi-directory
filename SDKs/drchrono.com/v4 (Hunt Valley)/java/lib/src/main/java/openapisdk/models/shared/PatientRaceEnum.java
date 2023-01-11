package openapisdk.models.shared;


public enum PatientRaceEnum {
    BLANK("blank"),
    INDIAN("indian"),
    ASIAN("asian"),
    BLACK("black"),
    HAWAIIAN("hawaiian"),
    WHITE("white"),
    OTHER("other"),
    DECLINED("declined");

    public final String value;

    private PatientRaceEnum(String value) {
        this.value = value;
    }
}
