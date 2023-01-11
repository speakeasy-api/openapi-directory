package openapisdk.models.operations;



public class DisassociateS3ResourcesResponse {
    public Object accessDeniedException;
    public DisassociateS3ResourcesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisassociateS3ResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateS3ResourcesResult disassociateS3ResourcesResult;
    public DisassociateS3ResourcesResponse withDisassociateS3ResourcesResult(openapisdk.models.shared.DisassociateS3ResourcesResult disassociateS3ResourcesResult) {
        this.disassociateS3ResourcesResult = disassociateS3ResourcesResult;
        return this;
    }
    public Object internalException;
    public DisassociateS3ResourcesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DisassociateS3ResourcesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DisassociateS3ResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}