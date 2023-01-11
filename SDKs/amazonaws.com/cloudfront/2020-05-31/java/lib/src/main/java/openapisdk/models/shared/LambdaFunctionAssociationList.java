package openapisdk.models.shared;



/**
 * LambdaFunctionAssociationList
 * A complex type that contains a Lambda@Edge function association.
**/
public class LambdaFunctionAssociationList {
    public EventTypeEnum eventType;
    public LambdaFunctionAssociationList withEventType(EventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    public Boolean includeBody;
    public LambdaFunctionAssociationList withIncludeBody(Boolean includeBody) {
        this.includeBody = includeBody;
        return this;
    }
    public String lambdaFunctionARN;
    public LambdaFunctionAssociationList withLambdaFunctionArn(String lambdaFunctionARN) {
        this.lambdaFunctionARN = lambdaFunctionARN;
        return this;
    }
}