package openapisdk.models.operations;



public class GetBlockResponse {
    public String contentType;
    public GetBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetBlock getBlock;
    public GetBlockResponse withGetBlock(openapisdk.models.shared.GetBlock getBlock) {
        this.getBlock = getBlock;
        return this;
    }
}