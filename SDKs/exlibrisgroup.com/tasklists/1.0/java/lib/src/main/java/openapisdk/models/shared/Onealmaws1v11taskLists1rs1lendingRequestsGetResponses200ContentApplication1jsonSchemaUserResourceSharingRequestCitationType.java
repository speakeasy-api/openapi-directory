package openapisdk.models.shared;



/**
 * Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType
 * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
**/
public class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType {
    public String desc;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    public String value;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType withValue(String value) {
        this.value = value;
        return this;
    }
}