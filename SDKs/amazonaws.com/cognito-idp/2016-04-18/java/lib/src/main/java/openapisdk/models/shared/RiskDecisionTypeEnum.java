package openapisdk.models.shared;


public enum RiskDecisionTypeEnum {
    NO_RISK("NoRisk"),
    ACCOUNT_TAKEOVER("AccountTakeover"),
    BLOCK("Block");

    public final String value;

    private RiskDecisionTypeEnum(String value) {
        this.value = value;
    }
}
