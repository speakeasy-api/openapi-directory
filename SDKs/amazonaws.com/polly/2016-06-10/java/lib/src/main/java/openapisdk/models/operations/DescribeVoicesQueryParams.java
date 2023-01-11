package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVoicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public DescribeVoicesEngineEnum engine;
    public DescribeVoicesQueryParams withEngine(DescribeVoicesEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeAdditionalLanguageCodes")
    public Boolean includeAdditionalLanguageCodes;
    public DescribeVoicesQueryParams withIncludeAdditionalLanguageCodes(Boolean includeAdditionalLanguageCodes) {
        this.includeAdditionalLanguageCodes = includeAdditionalLanguageCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LanguageCode")
    public DescribeVoicesLanguageCodeEnum languageCode;
    public DescribeVoicesQueryParams withLanguageCode(DescribeVoicesLanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeVoicesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}