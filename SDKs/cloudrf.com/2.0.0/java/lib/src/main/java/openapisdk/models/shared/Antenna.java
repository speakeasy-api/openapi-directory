package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Antenna {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ant")
    public Integer ant;
    public Antenna withAnt(Integer ant) {
        this.ant = ant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("azi")
    public Integer azi;
    public Antenna withAzi(Integer azi) {
        this.azi = azi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hbw")
    public Integer hbw;
    public Antenna withHbw(Integer hbw) {
        this.hbw = hbw;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pol")
    public AntennaPolEnum pol;
    public Antenna withPol(AntennaPolEnum pol) {
        this.pol = pol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlt")
    public Float tlt;
    public Antenna withTlt(Float tlt) {
        this.tlt = tlt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txg")
    public Float txg;
    public Antenna withTxg(Float txg) {
        this.txg = txg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txl")
    public Float txl;
    public Antenna withTxl(Float txl) {
        this.txl = txl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vbw")
    public Integer vbw;
    public Antenna withVbw(Integer vbw) {
        this.vbw = vbw;
        return this;
    }
}