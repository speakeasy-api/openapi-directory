package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation
 * Location of the requested resource.
**/
public class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_number")
    public String callNumber;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation withCallNumber(String callNumber) {
        this.callNumber = callNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copy")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy[] copy;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation withCopy(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy[] copy) {
        this.copy = copy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holding_id")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId holdingId;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation withHoldingId(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId holdingId) {
        this.holdingId = holdingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("library")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary library;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation withLibrary(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary library) {
        this.library = library;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shelving_location")
    public String shelvingLocation;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation withShelvingLocation(String shelvingLocation) {
        this.shelvingLocation = shelvingLocation;
        return this;
    }
}