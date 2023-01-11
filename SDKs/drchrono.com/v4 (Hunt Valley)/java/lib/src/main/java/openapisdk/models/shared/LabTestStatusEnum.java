package openapisdk.models.shared;


public enum LabTestStatusEnum {
    P("P"),
    I("I"),
    C("C"),
    F("F"),
    X("X");

    public final String value;

    private LabTestStatusEnum(String value) {
        this.value = value;
    }
}
