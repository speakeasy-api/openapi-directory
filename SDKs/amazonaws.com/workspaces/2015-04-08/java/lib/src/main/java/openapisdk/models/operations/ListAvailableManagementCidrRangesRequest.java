package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailableManagementCidrRangesRequest {
    public ListAvailableManagementCidrRangesHeaders headers;
    public ListAvailableManagementCidrRangesRequest withHeaders(ListAvailableManagementCidrRangesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAvailableManagementCidrRangesRequest request;
    public ListAvailableManagementCidrRangesRequest withRequest(openapisdk.models.shared.ListAvailableManagementCidrRangesRequest request) {
        this.request = request;
        return this;
    }
}