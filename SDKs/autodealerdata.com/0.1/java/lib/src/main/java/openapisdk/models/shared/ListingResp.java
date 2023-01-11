package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingResp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandName")
    public String brandName;
    public ListingResp withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheTimeLimit")
    public Long cacheTimeLimit;
    public ListingResp withCacheTimeLimit(Long cacheTimeLimit) {
        this.cacheTimeLimit = cacheTimeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public ListingResp withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("data")
    public ListingRespPaginated data;
    public ListingResp withData(ListingRespPaginated data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public ListingResp withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelName")
    public String modelName;
    public ListingResp withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msg")
    public String msg;
    public ListingResp withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionName")
    public String regionName;
    public ListingResp withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public ListingResp withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}