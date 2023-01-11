package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDetectKeyPhrasesResponse {
    @JsonProperty("ErrorList")
    public BatchItemError[] errorList;
    public BatchDetectKeyPhrasesResponse withErrorList(BatchItemError[] errorList) {
        this.errorList = errorList;
        return this;
    }
    @JsonProperty("ResultList")
    public BatchDetectKeyPhrasesItemResult[] resultList;
    public BatchDetectKeyPhrasesResponse withResultList(BatchDetectKeyPhrasesItemResult[] resultList) {
        this.resultList = resultList;
        return this;
    }
}