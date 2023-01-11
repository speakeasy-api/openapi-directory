package openapisdk.models.operations;



public class DescribeMlModelsResponse {
    public String contentType;
    public DescribeMlModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMlModelsOutput describeMLModelsOutput;
    public DescribeMlModelsResponse withDescribeMlModelsOutput(openapisdk.models.shared.DescribeMlModelsOutput describeMLModelsOutput) {
        this.describeMLModelsOutput = describeMLModelsOutput;
        return this;
    }
    public Object internalServerException;
    public DescribeMlModelsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DescribeMlModelsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeMlModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}