package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesFilter {
    @SpeakeasyMetadata("queryParam:name=company_id")
    public String companyId;
    public OpportunitiesFilter withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=monetary_amount")
    public Double monetaryAmount;
    public OpportunitiesFilter withMonetaryAmount(Double monetaryAmount) {
        this.monetaryAmount = monetaryAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=status")
    public String status;
    public OpportunitiesFilter withStatus(String status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=title")
    public String title;
    public OpportunitiesFilter withTitle(String title) {
        this.title = title;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=win_probability")
    public Double winProbability;
    public OpportunitiesFilter withWinProbability(Double winProbability) {
        this.winProbability = winProbability;
        return this;
    }
}