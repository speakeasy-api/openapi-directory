package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrafficReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dimension")
    public String dimension;
    public GetTrafficReportQueryParams withDimension(String dimension) {
        this.dimension = dimension;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetTrafficReportQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metric")
    public String metric;
    public GetTrafficReportQueryParams withMetric(String metric) {
        this.metric = metric;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetTrafficReportQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}