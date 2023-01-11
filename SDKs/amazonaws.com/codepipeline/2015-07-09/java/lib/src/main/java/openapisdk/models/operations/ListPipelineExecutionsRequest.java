package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPipelineExecutionsRequest {
    public ListPipelineExecutionsQueryParams queryParams;
    public ListPipelineExecutionsRequest withQueryParams(ListPipelineExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPipelineExecutionsHeaders headers;
    public ListPipelineExecutionsRequest withHeaders(ListPipelineExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPipelineExecutionsInput request;
    public ListPipelineExecutionsRequest withRequest(openapisdk.models.shared.ListPipelineExecutionsInput request) {
        this.request = request;
        return this;
    }
}