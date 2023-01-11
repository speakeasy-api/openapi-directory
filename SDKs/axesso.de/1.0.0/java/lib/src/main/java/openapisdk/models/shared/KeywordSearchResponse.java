package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeywordSearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainCode")
    public String domainCode;
    public KeywordSearchResponse withDomainCode(String domainCode) {
        this.domainCode = domainCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foundProducts")
    public String[] foundProducts;
    public KeywordSearchResponse withFoundProducts(String[] foundProducts) {
        this.foundProducts = foundProducts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyword")
    public String keyword;
    public KeywordSearchResponse withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfProducts")
    public Long numberOfProducts;
    public KeywordSearchResponse withNumberOfProducts(Long numberOfProducts) {
        this.numberOfProducts = numberOfProducts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMessage")
    public String responseMessage;
    public KeywordSearchResponse withResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public String responseStatus;
    public KeywordSearchResponse withResponseStatus(String responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortStrategy")
    public String sortStrategy;
    public KeywordSearchResponse withSortStrategy(String sortStrategy) {
        this.sortStrategy = sortStrategy;
        return this;
    }
}