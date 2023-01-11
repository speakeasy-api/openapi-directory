package openapisdk.models.shared;


public enum EobObjectPaymentMethodEnum {
    UNKNOWN(""),
    ACH("ACH"),
    BOPCCP("BOPCCP"),
    BOPCTX("BOPCTX"),
    CHK("CHK"),
    FWT("FWT"),
    VPAY("VPAY"),
    NON("NON");

    public final String value;

    private EobObjectPaymentMethodEnum(String value) {
        this.value = value;
    }
}
