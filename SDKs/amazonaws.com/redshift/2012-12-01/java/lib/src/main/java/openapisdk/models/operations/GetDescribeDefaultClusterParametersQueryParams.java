package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDefaultClusterParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDefaultClusterParametersActionEnum action;
    public GetDescribeDefaultClusterParametersQueryParams withAction(GetDescribeDefaultClusterParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDefaultClusterParametersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDefaultClusterParametersQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ParameterGroupFamily")
    public String parameterGroupFamily;
    public GetDescribeDefaultClusterParametersQueryParams withParameterGroupFamily(String parameterGroupFamily) {
        this.parameterGroupFamily = parameterGroupFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDefaultClusterParametersVersionEnum version;
    public GetDescribeDefaultClusterParametersQueryParams withVersion(GetDescribeDefaultClusterParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}