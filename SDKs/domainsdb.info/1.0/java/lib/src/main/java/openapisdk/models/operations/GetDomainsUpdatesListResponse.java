package openapisdk.models.operations;



public class GetDomainsUpdatesListResponse {
    public String contentType;
    public GetDomainsUpdatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDomainsUpdatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateModel updateModel;
    public GetDomainsUpdatesListResponse withUpdateModel(openapisdk.models.shared.UpdateModel updateModel) {
        this.updateModel = updateModel;
        return this;
    }
}