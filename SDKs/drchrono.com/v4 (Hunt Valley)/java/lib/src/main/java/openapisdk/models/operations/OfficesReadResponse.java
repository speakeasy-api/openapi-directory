package openapisdk.models.operations;



public class OfficesReadResponse {
    public String contentType;
    public OfficesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Office office;
    public OfficesReadResponse withOffice(openapisdk.models.shared.Office office) {
        this.office = office;
        return this;
    }
    public Long statusCode;
    public OfficesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}