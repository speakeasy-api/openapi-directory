package openapisdk.models.shared;


public enum SearchQuantumTasksFilterOperatorEnum {
    LT("LT"),
    LTE("LTE"),
    EQUAL("EQUAL"),
    GT("GT"),
    GTE("GTE"),
    BETWEEN("BETWEEN");

    public final String value;

    private SearchQuantumTasksFilterOperatorEnum(String value) {
        this.value = value;
    }
}
