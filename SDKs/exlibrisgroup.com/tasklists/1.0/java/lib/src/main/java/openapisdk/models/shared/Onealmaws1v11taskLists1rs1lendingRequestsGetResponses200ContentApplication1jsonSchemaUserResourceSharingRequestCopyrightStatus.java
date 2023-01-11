package openapisdk.models.shared;



/**
 * Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus
 * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
**/
public class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus {
    public String desc;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    public String value;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus withValue(String value) {
        this.value = value;
        return this;
    }
}