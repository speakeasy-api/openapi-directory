package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SortOptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMessage")
    public String responseMessage;
    public SortOptionResponse withResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public String responseStatus;
    public SortOptionResponse withResponseStatus(String responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultSize")
    public Long resultSize;
    public SortOptionResponse withResultSize(Long resultSize) {
        this.resultSize = resultSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOptions")
    public SortOptionResponseSortOptions[] sortOptions;
    public SortOptionResponse withSortOptions(SortOptionResponseSortOptions[] sortOptions) {
        this.sortOptions = sortOptions;
        return this;
    }
}