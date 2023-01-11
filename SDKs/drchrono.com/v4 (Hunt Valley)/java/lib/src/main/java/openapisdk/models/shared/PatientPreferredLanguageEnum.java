package openapisdk.models.shared;


public enum PatientPreferredLanguageEnum {
    BLANK("blank"),
    ENG("eng"),
    ZHO("zho"),
    FRA("fra"),
    ITA("ita"),
    JPN("jpn"),
    POR("por"),
    RUS("rus"),
    SPA("spa"),
    OTHER("other"),
    UNKNOWN("unknown"),
    DECLINED("declined");

    public final String value;

    private PatientPreferredLanguageEnum(String value) {
        this.value = value;
    }
}
