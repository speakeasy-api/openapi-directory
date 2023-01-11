package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatisticsIdRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public GetStatisticsIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public GetStatisticsIdSecurity security;
    public GetStatisticsIdRequest withSecurity(GetStatisticsIdSecurity security) {
        this.security = security;
        return this;
    }
}