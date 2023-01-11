package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Model {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cli")
    public Integer cli;
    public Model withCli(Integer cli) {
        this.cli = cli;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ked")
    public Long ked;
    public Model withKed(Long ked) {
        this.ked = ked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pe")
    public Integer pe;
    public Model withPe(Integer pe) {
        this.pe = pe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pm")
    public Integer pm;
    public Model withPm(Integer pm) {
        this.pm = pm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rel")
    public Integer rel;
    public Model withRel(Integer rel) {
        this.rel = rel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ter")
    public Integer ter;
    public Model withTer(Integer ter) {
        this.ter = ter;
        return this;
    }
}