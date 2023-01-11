package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiV1DonationsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public String amount;
    public PostApiV1DonationsCreateQueryParams withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=funding_source")
    public PostApiV1DonationsCreateFundingSourceEnum fundingSource;
    public PostApiV1DonationsCreateQueryParams withFundingSource(PostApiV1DonationsCreateFundingSourceEnum fundingSource) {
        this.fundingSource = fundingSource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nonprofit_id")
    public String nonprofitId;
    public PostApiV1DonationsCreateQueryParams withNonprofitId(String nonprofitId) {
        this.nonprofitId = nonprofitId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip_code")
    public String zipCode;
    public PostApiV1DonationsCreateQueryParams withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}