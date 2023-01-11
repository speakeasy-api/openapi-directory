package openapisdk.models.operations;



public class GetElectionsSearchResponse {
    public String contentType;
    public GetElectionsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ElectionsListPage electionsListPage;
    public GetElectionsSearchResponse withElectionsListPage(openapisdk.models.shared.ElectionsListPage electionsListPage) {
        this.electionsListPage = electionsListPage;
        return this;
    }
    public Long statusCode;
    public GetElectionsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}