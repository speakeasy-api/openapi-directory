package openapisdk.models.shared;


public enum DomainEnum {
    RETAIL("RETAIL"),
    CUSTOM("CUSTOM"),
    INVENTORY_PLANNING("INVENTORY_PLANNING"),
    EC2_CAPACITY("EC2_CAPACITY"),
    WORK_FORCE("WORK_FORCE"),
    WEB_TRAFFIC("WEB_TRAFFIC"),
    METRICS("METRICS");

    public final String value;

    private DomainEnum(String value) {
        this.value = value;
    }
}
