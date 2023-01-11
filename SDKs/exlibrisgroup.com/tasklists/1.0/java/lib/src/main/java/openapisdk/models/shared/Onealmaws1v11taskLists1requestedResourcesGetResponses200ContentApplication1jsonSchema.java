package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema
 * A list of requested resources.
**/
public class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_resource")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource[] requestedResource;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema withRequestedResource(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource[] requestedResource) {
        this.requestedResource = requestedResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_record_count")
    public Integer totalRecordCount;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema withTotalRecordCount(Integer totalRecordCount) {
        this.totalRecordCount = totalRecordCount;
        return this;
    }
}