package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDetectEntitiesResponse {
    @JsonProperty("ErrorList")
    public BatchItemError[] errorList;
    public BatchDetectEntitiesResponse withErrorList(BatchItemError[] errorList) {
        this.errorList = errorList;
        return this;
    }
    @JsonProperty("ResultList")
    public BatchDetectEntitiesItemResult[] resultList;
    public BatchDetectEntitiesResponse withResultList(BatchDetectEntitiesItemResult[] resultList) {
        this.resultList = resultList;
        return this;
    }
}