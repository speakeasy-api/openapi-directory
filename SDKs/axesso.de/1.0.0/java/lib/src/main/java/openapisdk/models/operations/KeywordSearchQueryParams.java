package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeywordSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domainCode")
    public String domainCode;
    public KeywordSearchQueryParams withDomainCode(String domainCode) {
        this.domainCode = domainCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public KeywordSearchQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=numberOfProducts")
    public Long numberOfProducts;
    public KeywordSearchQueryParams withNumberOfProducts(Long numberOfProducts) {
        this.numberOfProducts = numberOfProducts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public String sortBy;
    public KeywordSearchQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
}