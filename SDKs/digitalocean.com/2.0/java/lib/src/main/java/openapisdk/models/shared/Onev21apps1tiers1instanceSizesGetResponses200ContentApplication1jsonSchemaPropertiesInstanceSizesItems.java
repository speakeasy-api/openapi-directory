package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu_type")
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum cpuType;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withCpuType(Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpus")
    public String cpus;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withCpus(String cpus) {
        this.cpus = cpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory_bytes")
    public String memoryBytes;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withMemoryBytes(String memoryBytes) {
        this.memoryBytes = memoryBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_downgrade_to")
    public String tierDowngradeTo;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withTierDowngradeTo(String tierDowngradeTo) {
        this.tierDowngradeTo = tierDowngradeTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_slug")
    public String tierSlug;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withTierSlug(String tierSlug) {
        this.tierSlug = tierSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_upgrade_to")
    public String tierUpgradeTo;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withTierUpgradeTo(String tierUpgradeTo) {
        this.tierUpgradeTo = tierUpgradeTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usd_per_month")
    public String usdPerMonth;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withUsdPerMonth(String usdPerMonth) {
        this.usdPerMonth = usdPerMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usd_per_second")
    public String usdPerSecond;
    public Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems withUsdPerSecond(String usdPerSecond) {
        this.usdPerSecond = usdPerSecond;
        return this;
    }
}