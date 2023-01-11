package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteAnalysisSchemeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteAnalysisSchemeActionEnum action;
    public GetDeleteAnalysisSchemeQueryParams withAction(GetDeleteAnalysisSchemeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AnalysisSchemeName")
    public String analysisSchemeName;
    public GetDeleteAnalysisSchemeQueryParams withAnalysisSchemeName(String analysisSchemeName) {
        this.analysisSchemeName = analysisSchemeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDeleteAnalysisSchemeQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteAnalysisSchemeVersionEnum version;
    public GetDeleteAnalysisSchemeQueryParams withVersion(GetDeleteAnalysisSchemeVersionEnum version) {
        this.version = version;
        return this;
    }
}