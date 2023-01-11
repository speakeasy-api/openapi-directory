package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerGamePpaAveragePpa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public Double all;
    public PlayerGamePpaAveragePpa withAll(Double all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pass")
    public Double pass;
    public PlayerGamePpaAveragePpa withPass(Double pass) {
        this.pass = pass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rush")
    public Double rush;
    public PlayerGamePpaAveragePpa withRush(Double rush) {
        this.rush = rush;
        return this;
    }
}