package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrawlStatisticsByFrequencyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=frequency")
    public GetCrawlStatisticsByFrequencyFrequencyEnum frequency;
    public GetCrawlStatisticsByFrequencyQueryParams withFrequency(GetCrawlStatisticsByFrequencyFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetCrawlStatisticsByFrequencyQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
}