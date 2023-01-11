package openapisdk.models.shared;



/**
 * FunctionSummary
 * Contains configuration information and metadata about a CloudFront function.
**/
public class FunctionSummary {
    public FunctionConfig functionConfig;
    public FunctionSummary withFunctionConfig(FunctionConfig functionConfig) {
        this.functionConfig = functionConfig;
        return this;
    }
    public FunctionMetadata functionMetadata;
    public FunctionSummary withFunctionMetadata(FunctionMetadata functionMetadata) {
        this.functionMetadata = functionMetadata;
        return this;
    }
    public String name;
    public FunctionSummary withName(String name) {
        this.name = name;
        return this;
    }
    public String status;
    public FunctionSummary withStatus(String status) {
        this.status = status;
        return this;
    }
}