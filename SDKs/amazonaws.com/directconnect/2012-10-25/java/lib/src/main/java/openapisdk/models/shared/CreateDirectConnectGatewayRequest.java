package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDirectConnectGatewayRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazonSideAsn")
    public Long amazonSideAsn;
    public CreateDirectConnectGatewayRequest withAmazonSideAsn(Long amazonSideAsn) {
        this.amazonSideAsn = amazonSideAsn;
        return this;
    }
    @JsonProperty("directConnectGatewayName")
    public String directConnectGatewayName;
    public CreateDirectConnectGatewayRequest withDirectConnectGatewayName(String directConnectGatewayName) {
        this.directConnectGatewayName = directConnectGatewayName;
        return this;
    }
}