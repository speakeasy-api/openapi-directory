package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDetectSyntaxResponse {
    @JsonProperty("ErrorList")
    public BatchItemError[] errorList;
    public BatchDetectSyntaxResponse withErrorList(BatchItemError[] errorList) {
        this.errorList = errorList;
        return this;
    }
    @JsonProperty("ResultList")
    public BatchDetectSyntaxItemResult[] resultList;
    public BatchDetectSyntaxResponse withResultList(BatchDetectSyntaxItemResult[] resultList) {
        this.resultList = resultList;
        return this;
    }
}