package openapisdk.models.operations;



public class CreateDestinationDefinitionResponse {
    public String contentType;
    public CreateDestinationDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DestinationDefinitionRead destinationDefinitionRead;
    public CreateDestinationDefinitionResponse withDestinationDefinitionRead(openapisdk.models.shared.DestinationDefinitionRead destinationDefinitionRead) {
        this.destinationDefinitionRead = destinationDefinitionRead;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CreateDestinationDefinitionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public CreateDestinationDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}