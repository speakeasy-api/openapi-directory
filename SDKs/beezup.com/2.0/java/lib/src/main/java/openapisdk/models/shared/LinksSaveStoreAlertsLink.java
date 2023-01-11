package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LinksSaveStoreAlertsLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allOptionalParamsProvided")
    public Boolean allOptionalParamsProvided;
    public LinksSaveStoreAlertsLink withAllOptionalParamsProvided(Boolean allOptionalParamsProvided) {
        this.allOptionalParamsProvided = allOptionalParamsProvided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allRequiredParamsProvided")
    public Boolean allRequiredParamsProvided;
    public LinksSaveStoreAlertsLink withAllRequiredParamsProvided(Boolean allRequiredParamsProvided) {
        this.allRequiredParamsProvided = allRequiredParamsProvided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LinksSaveStoreAlertsLink withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docUrl")
    public String docUrl;
    public LinksSaveStoreAlertsLink withDocUrl(String docUrl) {
        this.docUrl = docUrl;
        return this;
    }
    @JsonProperty("href")
    public String href;
    public LinksSaveStoreAlertsLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public BeezUpCommonInfoSummaries info;
    public LinksSaveStoreAlertsLink withInfo(BeezUpCommonInfoSummaries info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public LinksSaveStoreAlertsLink withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public BeezUpCommonHttpMethodEnum method;
    public LinksSaveStoreAlertsLink withMethod(BeezUpCommonHttpMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public LinksSaveStoreAlertsLink withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, BeezUpCommonLinkParameter3> parameters;
    public LinksSaveStoreAlertsLink withParameters(java.util.Map<String, BeezUpCommonLinkParameter3> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlTemplated")
    public Boolean urlTemplated;
    public LinksSaveStoreAlertsLink withUrlTemplated(Boolean urlTemplated) {
        this.urlTemplated = urlTemplated;
        return this;
    }
}