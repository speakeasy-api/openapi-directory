package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Download {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agreement_name")
    public String agreementName;
    public Download withAgreementName(String agreementName) {
        this.agreementName = agreementName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_id")
    public String productId;
    public Download withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_type")
    public String productType;
    public Download withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Download withUri(String uri) {
        this.uri = uri;
        return this;
    }
}