package openapisdk.models.shared;


public enum RecordTypeEnum {
    SRV("SRV"),
    A("A"),
    AAAA("AAAA"),
    CNAME("CNAME");

    public final String value;

    private RecordTypeEnum(String value) {
        this.value = value;
    }
}
