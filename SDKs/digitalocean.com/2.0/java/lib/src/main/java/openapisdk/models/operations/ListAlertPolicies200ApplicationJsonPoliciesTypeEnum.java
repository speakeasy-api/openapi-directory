package openapisdk.models.operations;


public enum ListAlertPolicies200ApplicationJsonPoliciesTypeEnum {
    V1_INSIGHTS_DROPLET_LOAD1("v1/insights/droplet/load_1"),
    V1_INSIGHTS_DROPLET_LOAD5("v1/insights/droplet/load_5"),
    V1_INSIGHTS_DROPLET_LOAD15("v1/insights/droplet/load_15"),
    V1_INSIGHTS_DROPLET_MEMORY_UTILIZATION_PERCENT("v1/insights/droplet/memory_utilization_percent"),
    V1_INSIGHTS_DROPLET_DISK_UTILIZATION_PERCENT("v1/insights/droplet/disk_utilization_percent"),
    V1_INSIGHTS_DROPLET_CPU("v1/insights/droplet/cpu"),
    V1_INSIGHTS_DROPLET_DISK_READ("v1/insights/droplet/disk_read"),
    V1_INSIGHTS_DROPLET_DISK_WRITE("v1/insights/droplet/disk_write"),
    V1_INSIGHTS_DROPLET_PUBLIC_OUTBOUND_BANDWIDTH("v1/insights/droplet/public_outbound_bandwidth"),
    V1_INSIGHTS_DROPLET_PUBLIC_INBOUND_BANDWIDTH("v1/insights/droplet/public_inbound_bandwidth"),
    V1_INSIGHTS_DROPLET_PRIVATE_OUTBOUND_BANDWIDTH("v1/insights/droplet/private_outbound_bandwidth"),
    V1_INSIGHTS_DROPLET_PRIVATE_INBOUND_BANDWIDTH("v1/insights/droplet/private_inbound_bandwidth");

    public final String value;

    private ListAlertPolicies200ApplicationJsonPoliciesTypeEnum(String value) {
        this.value = value;
    }
}
