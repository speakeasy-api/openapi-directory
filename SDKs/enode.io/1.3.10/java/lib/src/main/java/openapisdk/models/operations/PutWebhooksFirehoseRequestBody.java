package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutWebhooksFirehoseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public PutWebhooksFirehoseRequestBody withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PutWebhooksFirehoseRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}