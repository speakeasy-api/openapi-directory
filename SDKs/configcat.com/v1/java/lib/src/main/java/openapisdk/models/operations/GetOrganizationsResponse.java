package openapisdk.models.operations;



public class GetOrganizationsResponse {
    public String contentType;
    public GetOrganizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrganizationModelHaljson[] organizationModelHaljsons;
    public GetOrganizationsResponse withOrganizationModelHaljsons(openapisdk.models.shared.OrganizationModelHaljson[] organizationModelHaljsons) {
        this.organizationModelHaljsons = organizationModelHaljsons;
        return this;
    }
    public openapisdk.models.shared.OrganizationModel[] organizationModels;
    public GetOrganizationsResponse withOrganizationModels(openapisdk.models.shared.OrganizationModel[] organizationModels) {
        this.organizationModels = organizationModels;
        return this;
    }
    public Long statusCode;
    public GetOrganizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}