package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTargetsForPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListTargetsForPolicyQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListTargetsForPolicyQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}