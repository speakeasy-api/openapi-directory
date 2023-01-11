package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModelYearDistResp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandName")
    public String brandName;
    public ModelYearDistResp withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheTimeLimit")
    public Long cacheTimeLimit;
    public ModelYearDistResp withCacheTimeLimit(Long cacheTimeLimit) {
        this.cacheTimeLimit = cacheTimeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public ModelYearDistResp withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("data")
    public ModelYearDistEntry[] data;
    public ModelYearDistResp withData(ModelYearDistEntry[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelName")
    public String modelName;
    public ModelYearDistResp withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msg")
    public String msg;
    public ModelYearDistResp withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionName")
    public String regionName;
    public ModelYearDistResp withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}