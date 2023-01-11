package openapisdk.models.operations;

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
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest
 * Request object.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination destination;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withDestination(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printed")
    public Boolean printed;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withPrinted(Boolean printed) {
        this.printed = printed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reported")
    public Boolean reported;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withReported(Boolean reported) {
        this.reported = reported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_date")
    public LocalDate requestDate;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withRequestDate(LocalDate requestDate) {
        this.requestDate = requestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_sub_type")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType requestSubType;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withRequestSubType(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType requestSubType) {
        this.requestSubType = requestSubType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("request_time")
    public OffsetDateTime requestTime;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withRequestTime(OffsetDateTime requestTime) {
        this.requestTime = requestTime;
        return this;
    }
    @JsonProperty("request_type")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum requestType;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withRequestType(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum requestType) {
        this.requestType = requestType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requester")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester requester;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest withRequester(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester requester) {
        this.requester = requester;
        return this;
    }
}