package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFindingsRequestBody {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public UpdateFindingsRequestBody withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateFindingsRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public UpdateFindingsRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public UpdateFindingsRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("status")
    public UpdateFindingsRequestBodyStatusEnum status;
    public UpdateFindingsRequestBody withStatus(UpdateFindingsRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}