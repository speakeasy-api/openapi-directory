package openapisdk.models.shared;


public enum TreatMissingDataEnum {
    BREACHING("breaching"),
    NOT_BREACHING("notBreaching"),
    IGNORE("ignore"),
    MISSING("missing");

    public final String value;

    private TreatMissingDataEnum(String value) {
        this.value = value;
    }
}
