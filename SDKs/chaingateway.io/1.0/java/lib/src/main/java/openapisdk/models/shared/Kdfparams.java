package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Kdfparams {
    @JsonProperty("dklen")
    public Integer dklen;
    public Kdfparams withDklen(Integer dklen) {
        this.dklen = dklen;
        return this;
    }
    @JsonProperty("n")
    public Integer n;
    public Kdfparams withN(Integer n) {
        this.n = n;
        return this;
    }
    @JsonProperty("p")
    public Integer p;
    public Kdfparams withP(Integer p) {
        this.p = p;
        return this;
    }
    @JsonProperty("r")
    public Integer r;
    public Kdfparams withR(Integer r) {
        this.r = r;
        return this;
    }
    @JsonProperty("salt")
    public String salt;
    public Kdfparams withSalt(String salt) {
        this.salt = salt;
        return this;
    }
}