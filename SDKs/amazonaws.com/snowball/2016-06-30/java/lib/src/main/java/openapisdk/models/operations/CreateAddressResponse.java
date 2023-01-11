package openapisdk.models.operations;



public class CreateAddressResponse {
    public String contentType;
    public CreateAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAddressResult createAddressResult;
    public CreateAddressResponse withCreateAddressResult(openapisdk.models.shared.CreateAddressResult createAddressResult) {
        this.createAddressResult = createAddressResult;
        return this;
    }
    public Object invalidAddressException;
    public CreateAddressResponse withInvalidAddressException(Object invalidAddressException) {
        this.invalidAddressException = invalidAddressException;
        return this;
    }
    public Long statusCode;
    public CreateAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedAddressException;
    public CreateAddressResponse withUnsupportedAddressException(Object unsupportedAddressException) {
        this.unsupportedAddressException = unsupportedAddressException;
        return this;
    }
}