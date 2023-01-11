package openapisdk.models.shared;



/**
 * FunctionConfig
 * Contains configuration information about a CloudFront function.
**/
public class FunctionConfig {
    public String comment;
    public FunctionConfig withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public FunctionRuntimeEnum runtime;
    public FunctionConfig withRuntime(FunctionRuntimeEnum runtime) {
        this.runtime = runtime;
        return this;
    }
}