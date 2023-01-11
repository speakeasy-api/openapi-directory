package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest
 * Request object.
**/
public class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination destination;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withDestination(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printed")
    public Boolean printed;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withPrinted(Boolean printed) {
        this.printed = printed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reported")
    public Boolean reported;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withReported(Boolean reported) {
        this.reported = reported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_date")
    public LocalDate requestDate;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withRequestDate(LocalDate requestDate) {
        this.requestDate = requestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_sub_type")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType requestSubType;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withRequestSubType(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType requestSubType) {
        this.requestSubType = requestSubType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("request_time")
    public OffsetDateTime requestTime;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withRequestTime(OffsetDateTime requestTime) {
        this.requestTime = requestTime;
        return this;
    }
    @JsonProperty("request_type")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum requestType;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withRequestType(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum requestType) {
        this.requestType = requestType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requester")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester requester;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest withRequester(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester requester) {
        this.requester = requester;
        return this;
    }
}