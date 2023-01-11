package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LinksConfigureChannelCatalogGeneralSettingsLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allOptionalParamsProvided")
    public Boolean allOptionalParamsProvided;
    public LinksConfigureChannelCatalogGeneralSettingsLink withAllOptionalParamsProvided(Boolean allOptionalParamsProvided) {
        this.allOptionalParamsProvided = allOptionalParamsProvided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allRequiredParamsProvided")
    public Boolean allRequiredParamsProvided;
    public LinksConfigureChannelCatalogGeneralSettingsLink withAllRequiredParamsProvided(Boolean allRequiredParamsProvided) {
        this.allRequiredParamsProvided = allRequiredParamsProvided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LinksConfigureChannelCatalogGeneralSettingsLink withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docUrl")
    public String docUrl;
    public LinksConfigureChannelCatalogGeneralSettingsLink withDocUrl(String docUrl) {
        this.docUrl = docUrl;
        return this;
    }
    @JsonProperty("href")
    public String href;
    public LinksConfigureChannelCatalogGeneralSettingsLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public BeezUpCommonInfoSummaries info;
    public LinksConfigureChannelCatalogGeneralSettingsLink withInfo(BeezUpCommonInfoSummaries info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public LinksConfigureChannelCatalogGeneralSettingsLink withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public BeezUpCommonHttpMethodEnum method;
    public LinksConfigureChannelCatalogGeneralSettingsLink withMethod(BeezUpCommonHttpMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public LinksConfigureChannelCatalogGeneralSettingsLink withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, BeezUpCommonLinkParameter3> parameters;
    public LinksConfigureChannelCatalogGeneralSettingsLink withParameters(java.util.Map<String, BeezUpCommonLinkParameter3> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlTemplated")
    public Boolean urlTemplated;
    public LinksConfigureChannelCatalogGeneralSettingsLink withUrlTemplated(Boolean urlTemplated) {
        this.urlTemplated = urlTemplated;
        return this;
    }
}