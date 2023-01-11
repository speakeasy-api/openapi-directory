package openapisdk.models.shared;


public enum PatientLabResultSetAbnormalFlagEnum {
    UNKNOWN(""),
    L("L"),
    H("H"),
    LL("LL"),
    HH("HH"),
    LESS_THAN("<"),
    GREATER_THAN(">"),
    N("N"),
    A("A"),
    AA("AA"),
    NULL_("null"),
    U("U"),
    D("D"),
    B("B"),
    W("W"),
    S("S"),
    R("R"),
    I("I"),
    MS("MS"),
    VS("VS");

    public final String value;

    private PatientLabResultSetAbnormalFlagEnum(String value) {
        this.value = value;
    }
}
