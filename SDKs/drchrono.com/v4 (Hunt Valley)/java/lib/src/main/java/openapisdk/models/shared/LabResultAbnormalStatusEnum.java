package openapisdk.models.shared;


public enum LabResultAbnormalStatusEnum {
    L("L"),
    LL("LL"),
    H("H"),
    HH("HH"),
    LESS_THAN("<"),
    GREATER_THAN(">"),
    A("A"),
    AA("AA"),
    S("S"),
    R("R"),
    I("I"),
    NEG("NEG"),
    POS("POS"),
    N("N"),
    UNKNOWN("");

    public final String value;

    private LabResultAbnormalStatusEnum(String value) {
        this.value = value;
    }
}
