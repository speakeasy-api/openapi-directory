package openapisdk.models.operations;



public class GetListDomainNamesResponse {
    public byte[] body;
    public GetListDomainNamesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListDomainNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListDomainNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}