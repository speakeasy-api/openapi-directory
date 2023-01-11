package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDetectSentimentResponse {
    @JsonProperty("ErrorList")
    public BatchItemError[] errorList;
    public BatchDetectSentimentResponse withErrorList(BatchItemError[] errorList) {
        this.errorList = errorList;
        return this;
    }
    @JsonProperty("ResultList")
    public BatchDetectSentimentItemResult[] resultList;
    public BatchDetectSentimentResponse withResultList(BatchDetectSentimentItemResult[] resultList) {
        this.resultList = resultList;
        return this;
    }
}