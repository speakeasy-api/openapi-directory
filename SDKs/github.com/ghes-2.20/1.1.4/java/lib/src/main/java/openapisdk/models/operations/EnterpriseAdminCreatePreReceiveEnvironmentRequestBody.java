package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminCreatePreReceiveEnvironmentRequestBody {
    @JsonProperty("image_url")
    public String imageUrl;
    public EnterpriseAdminCreatePreReceiveEnvironmentRequestBody withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EnterpriseAdminCreatePreReceiveEnvironmentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}