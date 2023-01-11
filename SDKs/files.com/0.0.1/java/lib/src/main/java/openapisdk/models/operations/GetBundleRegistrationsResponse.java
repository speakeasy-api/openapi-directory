package openapisdk.models.operations;



public class GetBundleRegistrationsResponse {
    public openapisdk.models.shared.BundleRegistrationEntity[] bundleRegistrationEntities;
    public GetBundleRegistrationsResponse withBundleRegistrationEntities(openapisdk.models.shared.BundleRegistrationEntity[] bundleRegistrationEntities) {
        this.bundleRegistrationEntities = bundleRegistrationEntities;
        return this;
    }
    public String contentType;
    public GetBundleRegistrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBundleRegistrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}