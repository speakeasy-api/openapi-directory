package openapisdk.models.shared;



/**
 * GetAccessKeyLastUsedResponse
 * Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.
**/
public class GetAccessKeyLastUsedResponse {
    public AccessKeyLastUsed accessKeyLastUsed;
    public GetAccessKeyLastUsedResponse withAccessKeyLastUsed(AccessKeyLastUsed accessKeyLastUsed) {
        this.accessKeyLastUsed = accessKeyLastUsed;
        return this;
    }
    public String userName;
    public GetAccessKeyLastUsedResponse withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}