package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Environment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cll")
    public Integer cll;
    public Environment withCll(Integer cll) {
        this.cll = cll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clm")
    public Integer clm;
    public Environment withClm(Integer clm) {
        this.clm = clm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mat")
    public Float mat;
    public Environment withMat(Float mat) {
        this.mat = mat;
        return this;
    }
}