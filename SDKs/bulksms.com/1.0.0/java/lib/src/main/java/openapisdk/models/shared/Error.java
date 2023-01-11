package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error
 * See the [errors page](errors/) for more detail on what kind of errors you can get.
**/
public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("status")
    public Integer status;
    public Error withStatus(Integer status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Error withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Error withType(String type) {
        this.type = type;
        return this;
    }
}