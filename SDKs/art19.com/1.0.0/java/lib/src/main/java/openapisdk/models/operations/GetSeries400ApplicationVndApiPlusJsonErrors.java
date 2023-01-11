package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSeries400ApplicationVndApiPlusJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetSeries400ApplicationVndApiPlusJsonErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public GetSeries400ApplicationVndApiPlusJsonErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GetSeries400ApplicationVndApiPlusJsonErrorsSource source;
    public GetSeries400ApplicationVndApiPlusJsonErrors withSource(GetSeries400ApplicationVndApiPlusJsonErrorsSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetSeries400ApplicationVndApiPlusJsonErrors withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetSeries400ApplicationVndApiPlusJsonErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}