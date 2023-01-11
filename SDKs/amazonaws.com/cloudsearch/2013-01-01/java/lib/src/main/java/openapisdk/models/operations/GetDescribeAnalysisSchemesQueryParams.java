package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAnalysisSchemesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAnalysisSchemesActionEnum action;
    public GetDescribeAnalysisSchemesQueryParams withAction(GetDescribeAnalysisSchemesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AnalysisSchemeNames")
    public String[] analysisSchemeNames;
    public GetDescribeAnalysisSchemesQueryParams withAnalysisSchemeNames(String[] analysisSchemeNames) {
        this.analysisSchemeNames = analysisSchemeNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Deployed")
    public Boolean deployed;
    public GetDescribeAnalysisSchemesQueryParams withDeployed(Boolean deployed) {
        this.deployed = deployed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeAnalysisSchemesQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAnalysisSchemesVersionEnum version;
    public GetDescribeAnalysisSchemesQueryParams withVersion(GetDescribeAnalysisSchemesVersionEnum version) {
        this.version = version;
        return this;
    }
}