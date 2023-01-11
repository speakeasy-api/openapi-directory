package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenericResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandName")
    public String brandName;
    public GenericResponse withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheTimeLimit")
    public Long cacheTimeLimit;
    public GenericResponse withCacheTimeLimit(Long cacheTimeLimit) {
        this.cacheTimeLimit = cacheTimeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public GenericResponse withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public GenericResponse withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelName")
    public String modelName;
    public GenericResponse withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msg")
    public String msg;
    public GenericResponse withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionName")
    public String regionName;
    public GenericResponse withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}