package openapisdk.models.shared;


public enum DetailScopeEnum {
    PARAMETER("Parameter"),
    REPORT("Report"),
    ITEM("Item");

    public final String value;

    private DetailScopeEnum(String value) {
        this.value = value;
    }
}
