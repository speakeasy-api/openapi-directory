package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTokenRequest {
    @JsonProperty("contractaddress")
    public String contractaddress;
    public GetTokenRequest withContractaddress(String contractaddress) {
        this.contractaddress = contractaddress;
        return this;
    }
}