package openapisdk.models.shared;


public enum MappingRuleMatchTypeEnum {
    EQUALS("Equals"),
    CONTAINS("Contains"),
    STARTS_WITH("StartsWith"),
    NOT_EQUAL("NotEqual");

    public final String value;

    private MappingRuleMatchTypeEnum(String value) {
        this.value = value;
    }
}
