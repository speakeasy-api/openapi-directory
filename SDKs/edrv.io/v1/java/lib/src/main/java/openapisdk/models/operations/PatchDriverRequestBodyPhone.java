package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchDriverRequestBodyPhone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home")
    public String home;
    public PatchDriverRequestBodyPhone withHome(String home) {
        this.home = home;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile")
    public String mobile;
    public PatchDriverRequestBodyPhone withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("work")
    public String work;
    public PatchDriverRequestBodyPhone withWork(String work) {
        this.work = work;
        return this;
    }
}