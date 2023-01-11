package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVirtualInterfaceTestHistoryRequest {
    public ListVirtualInterfaceTestHistoryHeaders headers;
    public ListVirtualInterfaceTestHistoryRequest withHeaders(ListVirtualInterfaceTestHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListVirtualInterfaceTestHistoryRequest request;
    public ListVirtualInterfaceTestHistoryRequest withRequest(openapisdk.models.shared.ListVirtualInterfaceTestHistoryRequest request) {
        this.request = request;
        return this;
    }
}