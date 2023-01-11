package openapisdk.models.operations;



public class ListDataCatalogsResponse {
    public String contentType;
    public ListDataCatalogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDataCatalogsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListDataCatalogsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDataCatalogsOutput listDataCatalogsOutput;
    public ListDataCatalogsResponse withListDataCatalogsOutput(openapisdk.models.shared.ListDataCatalogsOutput listDataCatalogsOutput) {
        this.listDataCatalogsOutput = listDataCatalogsOutput;
        return this;
    }
    public Long statusCode;
    public ListDataCatalogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}