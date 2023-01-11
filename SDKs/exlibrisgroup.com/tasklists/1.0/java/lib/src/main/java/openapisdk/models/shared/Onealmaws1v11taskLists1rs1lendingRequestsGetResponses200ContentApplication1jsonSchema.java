package openapisdk.models.shared;



/**
 * Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema
 * A list of resource sharing requests.
**/
public class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema {
    public Long totalRecordCount;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema withTotalRecordCount(Long totalRecordCount) {
        this.totalRecordCount = totalRecordCount;
        return this;
    }
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest[] userResourceSharingRequest;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema withUserResourceSharingRequest(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest[] userResourceSharingRequest) {
        this.userResourceSharingRequest = userResourceSharingRequest;
        return this;
    }
}