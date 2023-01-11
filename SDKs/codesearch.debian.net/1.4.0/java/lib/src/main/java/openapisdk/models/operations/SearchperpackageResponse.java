package openapisdk.models.operations;



public class SearchperpackageResponse {
    public String contentType;
    public SearchperpackageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PackageSearchResult[] packageSearchResults;
    public SearchperpackageResponse withPackageSearchResults(openapisdk.models.shared.PackageSearchResult[] packageSearchResults) {
        this.packageSearchResults = packageSearchResults;
        return this;
    }
    public Long statusCode;
    public SearchperpackageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}