package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainStatisticsReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Domain")
    public String domain;
    public GetDomainStatisticsReportPathParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}