package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRelatedItemsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateRelatedItemsRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public UpdateRelatedItemsRequestBody withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
    @JsonProperty("relatedItemsUpdate")
    public UpdateRelatedItemsRequestBodyRelatedItemsUpdate relatedItemsUpdate;
    public UpdateRelatedItemsRequestBody withRelatedItemsUpdate(UpdateRelatedItemsRequestBodyRelatedItemsUpdate relatedItemsUpdate) {
        this.relatedItemsUpdate = relatedItemsUpdate;
        return this;
    }
}