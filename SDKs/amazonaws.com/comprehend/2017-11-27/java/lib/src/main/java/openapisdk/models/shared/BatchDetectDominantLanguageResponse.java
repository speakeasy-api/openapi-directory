package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDetectDominantLanguageResponse {
    @JsonProperty("ErrorList")
    public BatchItemError[] errorList;
    public BatchDetectDominantLanguageResponse withErrorList(BatchItemError[] errorList) {
        this.errorList = errorList;
        return this;
    }
    @JsonProperty("ResultList")
    public BatchDetectDominantLanguageItemResult[] resultList;
    public BatchDetectDominantLanguageResponse withResultList(BatchDetectDominantLanguageItemResult[] resultList) {
        this.resultList = resultList;
        return this;
    }
}