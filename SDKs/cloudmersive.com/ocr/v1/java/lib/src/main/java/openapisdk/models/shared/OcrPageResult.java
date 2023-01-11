package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OcrPageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeanConfidenceLevel")
    public Float meanConfidenceLevel;
    public OcrPageResult withMeanConfidenceLevel(Float meanConfidenceLevel) {
        this.meanConfidenceLevel = meanConfidenceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageNumber")
    public Integer pageNumber;
    public OcrPageResult withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextResult")
    public String textResult;
    public OcrPageResult withTextResult(String textResult) {
        this.textResult = textResult;
        return this;
    }
}