package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCredits400ApplicationVndApiPlusJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetCredits400ApplicationVndApiPlusJsonErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public GetCredits400ApplicationVndApiPlusJsonErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GetCredits400ApplicationVndApiPlusJsonErrorsSource source;
    public GetCredits400ApplicationVndApiPlusJsonErrors withSource(GetCredits400ApplicationVndApiPlusJsonErrorsSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetCredits400ApplicationVndApiPlusJsonErrors withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetCredits400ApplicationVndApiPlusJsonErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}