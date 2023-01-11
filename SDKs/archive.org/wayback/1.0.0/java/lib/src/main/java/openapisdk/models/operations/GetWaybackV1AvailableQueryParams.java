package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWaybackV1AvailableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetWaybackV1AvailableQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=closest")
    public openapisdk.models.shared.ClosestEnum closest;
    public GetWaybackV1AvailableQueryParams withClosest(openapisdk.models.shared.ClosestEnum closest) {
        this.closest = closest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status_code")
    public Long statusCode;
    public GetWaybackV1AvailableQueryParams withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public GetWaybackV1AvailableQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Double timeout;
    public GetWaybackV1AvailableQueryParams withTimeout(Double timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timestamp")
    public String timestamp;
    public GetWaybackV1AvailableQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetWaybackV1AvailableQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}