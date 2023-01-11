package openapisdk.models.shared;


public enum EditorialSegmentContractEnum {
    ARCHIVAL("archival"),
    ENTERTAINMENT("entertainment"),
    NEWS("news"),
    PUBLICITY("publicity"),
    ROYALTY("royalty"),
    SPORT("sport");

    public final String value;

    private EditorialSegmentContractEnum(String value) {
        this.value = value;
    }
}
