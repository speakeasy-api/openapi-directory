package openapisdk.models.operations;



public class GetPipelineStepLogForRepositoryResponse {
    public byte[] body;
    public GetPipelineStepLogForRepositoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPipelineStepLogForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineStepLogForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}