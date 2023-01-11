package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContributorActivityWeeks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("a")
    public Long a;
    public ContributorActivityWeeks withA(Long a) {
        this.a = a;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("c")
    public Long c;
    public ContributorActivityWeeks withC(Long c) {
        this.c = c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("d")
    public Long d;
    public ContributorActivityWeeks withD(Long d) {
        this.d = d;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("w")
    public Long w;
    public ContributorActivityWeeks withW(Long w) {
        this.w = w;
        return this;
    }
}