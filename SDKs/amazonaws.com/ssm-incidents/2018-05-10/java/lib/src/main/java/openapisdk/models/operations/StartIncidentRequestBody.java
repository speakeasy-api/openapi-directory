package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartIncidentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public StartIncidentRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impact")
    public Long impact;
    public StartIncidentRequestBody withImpact(Long impact) {
        this.impact = impact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedItems")
    public openapisdk.models.shared.RelatedItem[] relatedItems;
    public StartIncidentRequestBody withRelatedItems(openapisdk.models.shared.RelatedItem[] relatedItems) {
        this.relatedItems = relatedItems;
        return this;
    }
    @JsonProperty("responsePlanArn")
    public String responsePlanArn;
    public StartIncidentRequestBody withResponsePlanArn(String responsePlanArn) {
        this.responsePlanArn = responsePlanArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public StartIncidentRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDetails")
    public StartIncidentRequestBodyTriggerDetails triggerDetails;
    public StartIncidentRequestBody withTriggerDetails(StartIncidentRequestBodyTriggerDetails triggerDetails) {
        this.triggerDetails = triggerDetails;
        return this;
    }
}