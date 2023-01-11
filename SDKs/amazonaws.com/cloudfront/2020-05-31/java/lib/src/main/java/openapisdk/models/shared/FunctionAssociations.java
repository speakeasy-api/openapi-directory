package openapisdk.models.shared;



/**
 * FunctionAssociations
 * A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.
**/
public class FunctionAssociations {
    public FunctionAssociationList[] items;
    public FunctionAssociations withItems(FunctionAssociationList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public FunctionAssociations withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}