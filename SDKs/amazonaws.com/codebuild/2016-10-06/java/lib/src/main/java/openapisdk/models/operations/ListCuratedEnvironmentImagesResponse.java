package openapisdk.models.operations;



public class ListCuratedEnvironmentImagesResponse {
    public String contentType;
    public ListCuratedEnvironmentImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCuratedEnvironmentImagesOutput listCuratedEnvironmentImagesOutput;
    public ListCuratedEnvironmentImagesResponse withListCuratedEnvironmentImagesOutput(openapisdk.models.shared.ListCuratedEnvironmentImagesOutput listCuratedEnvironmentImagesOutput) {
        this.listCuratedEnvironmentImagesOutput = listCuratedEnvironmentImagesOutput;
        return this;
    }
    public Long statusCode;
    public ListCuratedEnvironmentImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}