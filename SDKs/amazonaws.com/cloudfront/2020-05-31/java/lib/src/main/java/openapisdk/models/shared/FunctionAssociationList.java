package openapisdk.models.shared;



/**
 * FunctionAssociationList
 * A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
**/
public class FunctionAssociationList {
    public EventTypeEnum eventType;
    public FunctionAssociationList withEventType(EventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    public String functionARN;
    public FunctionAssociationList withFunctionArn(String functionARN) {
        this.functionARN = functionARN;
        return this;
    }
}