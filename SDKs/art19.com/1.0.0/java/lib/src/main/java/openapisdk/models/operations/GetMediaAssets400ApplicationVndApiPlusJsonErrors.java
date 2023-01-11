package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMediaAssets400ApplicationVndApiPlusJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetMediaAssets400ApplicationVndApiPlusJsonErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public GetMediaAssets400ApplicationVndApiPlusJsonErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource source;
    public GetMediaAssets400ApplicationVndApiPlusJsonErrors withSource(GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetMediaAssets400ApplicationVndApiPlusJsonErrors withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetMediaAssets400ApplicationVndApiPlusJsonErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}