package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDriversRequestBodyPhone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home")
    public String home;
    public PostDriversRequestBodyPhone withHome(String home) {
        this.home = home;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile")
    public String mobile;
    public PostDriversRequestBodyPhone withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("work")
    public String work;
    public PostDriversRequestBodyPhone withWork(String work) {
        this.work = work;
        return this;
    }
}