package openapisdk.models.shared;



/**
 * QueryArgProfileList
 * Query argument-profile mapping for field-level encryption.
**/
public class QueryArgProfileList {
    public String profileId;
    public QueryArgProfileList withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    public String queryArg;
    public QueryArgProfileList withQueryArg(String queryArg) {
        this.queryArg = queryArg;
        return this;
    }
}