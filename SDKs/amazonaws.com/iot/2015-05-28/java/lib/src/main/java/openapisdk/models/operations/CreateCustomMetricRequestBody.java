package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomMetricRequestBody {
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateCustomMetricRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CreateCustomMetricRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("metricType")
    public CreateCustomMetricRequestBodyMetricTypeEnum metricType;
    public CreateCustomMetricRequestBody withMetricType(CreateCustomMetricRequestBodyMetricTypeEnum metricType) {
        this.metricType = metricType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateCustomMetricRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}