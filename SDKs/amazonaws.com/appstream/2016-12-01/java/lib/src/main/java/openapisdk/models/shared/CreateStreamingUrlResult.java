package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateStreamingUrlResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Expires")
    public OffsetDateTime expires;
    public CreateStreamingUrlResult withExpires(OffsetDateTime expires) {
        this.expires = expires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamingURL")
    public String streamingURL;
    public CreateStreamingUrlResult withStreamingUrl(String streamingURL) {
        this.streamingURL = streamingURL;
        return this;
    }
}