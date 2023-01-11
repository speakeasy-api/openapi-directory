package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInstanceSizes200ApplicationJsonInstanceSizes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu_type")
    public ListInstanceSizes200ApplicationJsonInstanceSizesSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum cpuType;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withCpuType(ListInstanceSizes200ApplicationJsonInstanceSizesSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpus")
    public String cpus;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withCpus(String cpus) {
        this.cpus = cpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory_bytes")
    public String memoryBytes;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withMemoryBytes(String memoryBytes) {
        this.memoryBytes = memoryBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_downgrade_to")
    public String tierDowngradeTo;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withTierDowngradeTo(String tierDowngradeTo) {
        this.tierDowngradeTo = tierDowngradeTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_slug")
    public String tierSlug;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withTierSlug(String tierSlug) {
        this.tierSlug = tierSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_upgrade_to")
    public String tierUpgradeTo;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withTierUpgradeTo(String tierUpgradeTo) {
        this.tierUpgradeTo = tierUpgradeTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usd_per_month")
    public String usdPerMonth;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withUsdPerMonth(String usdPerMonth) {
        this.usdPerMonth = usdPerMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usd_per_second")
    public String usdPerSecond;
    public ListInstanceSizes200ApplicationJsonInstanceSizes withUsdPerSecond(String usdPerSecond) {
        this.usdPerSecond = usdPerSecond;
        return this;
    }
}