package openapisdk.models.shared;


public enum WorkerTypeEnum {
    STANDARD("Standard"),
    G1_X("G.1X"),
    G2_X("G.2X");

    public final String value;

    private WorkerTypeEnum(String value) {
        this.value = value;
    }
}
