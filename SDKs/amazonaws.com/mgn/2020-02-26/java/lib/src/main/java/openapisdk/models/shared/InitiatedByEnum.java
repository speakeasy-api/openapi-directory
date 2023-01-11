package openapisdk.models.shared;


public enum InitiatedByEnum {
    START_TEST("START_TEST"),
    START_CUTOVER("START_CUTOVER"),
    DIAGNOSTIC("DIAGNOSTIC"),
    TERMINATE("TERMINATE");

    public final String value;

    private InitiatedByEnum(String value) {
        this.value = value;
    }
}
