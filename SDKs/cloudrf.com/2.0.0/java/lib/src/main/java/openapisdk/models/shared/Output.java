package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Output {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ber")
    public Integer ber;
    public Output withBer(Integer ber) {
        this.ber = ber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("col")
    public String col;
    public Output withCol(String col) {
        this.col = col;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mod")
    public Integer mod;
    public Output withMod(Integer mod) {
        this.mod = mod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nf")
    public Integer nf;
    public Output withNf(Integer nf) {
        this.nf = nf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("out")
    public Integer out;
    public Output withOut(Integer out) {
        this.out = out;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rad")
    public Float rad;
    public Output withRad(Float rad) {
        this.rad = rad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("res")
    public Integer res;
    public Output withRes(Integer res) {
        this.res = res;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public OutputUnitsEnum units;
    public Output withUnits(OutputUnitsEnum units) {
        this.units = units;
        return this;
    }
}