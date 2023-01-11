package openapisdk.models.shared;


public enum DoctorMessageTypeEnum {
    GP("GP"),
    GC("GC"),
    GT("GT"),
    GZ("GZ"),
    IF("IF"),
    OF("OF"),
    IL("IL"),
    IR("IR"),
    OR("OR"),
    IE("IE"),
    OA("OA"),
    PO("PO"),
    PI("PI"),
    PM("PM"),
    OO("OO"),
    OD("OD"),
    ID("ID"),
    DL("DL"),
    CN("CN");

    public final String value;

    private DoctorMessageTypeEnum(String value) {
        this.value = value;
    }
}
