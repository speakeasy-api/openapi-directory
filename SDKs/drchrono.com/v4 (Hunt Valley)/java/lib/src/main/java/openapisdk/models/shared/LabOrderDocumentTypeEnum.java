package openapisdk.models.shared;


public enum LabOrderDocumentTypeEnum {
    REQ("REQ"),
    ABN("ABN"),
    RA("R-A"),
    RES("RES");

    public final String value;

    private LabOrderDocumentTypeEnum(String value) {
        this.value = value;
    }
}
