package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostOrdersOrderResponseV2MerchantV2 {
    @JsonProperty("id")
    public Long id;
    public PostOrdersOrderResponseV2MerchantV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostOrdersOrderResponseV2MerchantV2 withName(String name) {
        this.name = name;
        return this;
    }
}