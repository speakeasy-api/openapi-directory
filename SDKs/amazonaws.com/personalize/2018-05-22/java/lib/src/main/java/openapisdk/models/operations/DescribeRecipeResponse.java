package openapisdk.models.operations;



public class DescribeRecipeResponse {
    public String contentType;
    public DescribeRecipeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRecipeResponse describeRecipeResponse;
    public DescribeRecipeResponse withDescribeRecipeResponse(openapisdk.models.shared.DescribeRecipeResponse describeRecipeResponse) {
        this.describeRecipeResponse = describeRecipeResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeRecipeResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRecipeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRecipeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}