package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAllDroplets200ApplicationJsonDropletsSize {
    @JsonProperty("available")
    public Boolean available;
    public ListAllDroplets200ApplicationJsonDropletsSize withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public ListAllDroplets200ApplicationJsonDropletsSize withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk")
    public Long disk;
    public ListAllDroplets200ApplicationJsonDropletsSize withDisk(Long disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("memory")
    public Long memory;
    public ListAllDroplets200ApplicationJsonDropletsSize withMemory(Long memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("price_hourly")
    public Float priceHourly;
    public ListAllDroplets200ApplicationJsonDropletsSize withPriceHourly(Float priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public Float priceMonthly;
    public ListAllDroplets200ApplicationJsonDropletsSize withPriceMonthly(Float priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
    @JsonProperty("regions")
    public String[] regions;
    public ListAllDroplets200ApplicationJsonDropletsSize withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public ListAllDroplets200ApplicationJsonDropletsSize withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonProperty("transfer")
    public Float transfer;
    public ListAllDroplets200ApplicationJsonDropletsSize withTransfer(Float transfer) {
        this.transfer = transfer;
        return this;
    }
    @JsonProperty("vcpus")
    public Long vcpus;
    public ListAllDroplets200ApplicationJsonDropletsSize withVcpus(Long vcpus) {
        this.vcpus = vcpus;
        return this;
    }
}