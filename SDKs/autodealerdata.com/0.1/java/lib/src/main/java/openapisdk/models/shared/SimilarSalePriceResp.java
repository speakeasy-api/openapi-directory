package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SimilarSalePriceResp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandName")
    public String brandName;
    public SimilarSalePriceResp withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheTimeLimit")
    public Long cacheTimeLimit;
    public SimilarSalePriceResp withCacheTimeLimit(Long cacheTimeLimit) {
        this.cacheTimeLimit = cacheTimeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public SimilarSalePriceResp withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("data")
    public SimilarSalePriceData data;
    public SimilarSalePriceResp withData(SimilarSalePriceData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelName")
    public String modelName;
    public SimilarSalePriceResp withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msg")
    public String msg;
    public SimilarSalePriceResp withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionName")
    public String regionName;
    public SimilarSalePriceResp withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}