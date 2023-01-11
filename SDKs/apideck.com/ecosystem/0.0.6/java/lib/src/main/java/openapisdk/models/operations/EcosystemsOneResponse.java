package openapisdk.models.operations;



public class EcosystemsOneResponse {
    public String contentType;
    public EcosystemsOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEcosystemResponse getEcosystemResponse;
    public EcosystemsOneResponse withGetEcosystemResponse(openapisdk.models.shared.GetEcosystemResponse getEcosystemResponse) {
        this.getEcosystemResponse = getEcosystemResponse;
        return this;
    }
    public Long statusCode;
    public EcosystemsOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}