package openapisdk.models.shared;



public class GetShippingLabelOutput {
    public String shippingLabelURL;
    public GetShippingLabelOutput withShippingLabelUrl(String shippingLabelURL) {
        this.shippingLabelURL = shippingLabelURL;
        return this;
    }
    public String warning;
    public GetShippingLabelOutput withWarning(String warning) {
        this.warning = warning;
        return this;
    }
}