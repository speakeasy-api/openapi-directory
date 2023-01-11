package openapisdk.models.shared;


public enum PageStatusEnum {
    BUILT("built"),
    BUILDING("building"),
    ERRORED("errored");

    public final String value;

    private PageStatusEnum(String value) {
        this.value = value;
    }
}
