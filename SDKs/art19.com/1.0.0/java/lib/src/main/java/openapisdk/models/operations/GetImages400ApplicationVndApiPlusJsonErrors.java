package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImages400ApplicationVndApiPlusJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetImages400ApplicationVndApiPlusJsonErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public GetImages400ApplicationVndApiPlusJsonErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GetImages400ApplicationVndApiPlusJsonErrorsSource source;
    public GetImages400ApplicationVndApiPlusJsonErrors withSource(GetImages400ApplicationVndApiPlusJsonErrorsSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetImages400ApplicationVndApiPlusJsonErrors withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetImages400ApplicationVndApiPlusJsonErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}