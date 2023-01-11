package openapisdk.models.operations;



public class ListVirtualInterfaceTestHistoryResponse {
    public String contentType;
    public ListVirtualInterfaceTestHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public ListVirtualInterfaceTestHistoryResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public ListVirtualInterfaceTestHistoryResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.ListVirtualInterfaceTestHistoryResponse listVirtualInterfaceTestHistoryResponse;
    public ListVirtualInterfaceTestHistoryResponse withListVirtualInterfaceTestHistoryResponse(openapisdk.models.shared.ListVirtualInterfaceTestHistoryResponse listVirtualInterfaceTestHistoryResponse) {
        this.listVirtualInterfaceTestHistoryResponse = listVirtualInterfaceTestHistoryResponse;
        return this;
    }
    public Long statusCode;
    public ListVirtualInterfaceTestHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}