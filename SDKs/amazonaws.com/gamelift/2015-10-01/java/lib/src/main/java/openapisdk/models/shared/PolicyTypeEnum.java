package openapisdk.models.shared;


public enum PolicyTypeEnum {
    RULE_BASED("RuleBased"),
    TARGET_BASED("TargetBased");

    public final String value;

    private PolicyTypeEnum(String value) {
        this.value = value;
    }
}
