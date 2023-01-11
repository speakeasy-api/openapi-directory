package openapisdk.models.shared;



/**
 * QueryArgProfileConfig
 * Configuration for query argument-profile mapping for field-level encryption.
**/
public class QueryArgProfileConfig {
    public Boolean forwardWhenQueryArgProfileIsUnknown;
    public QueryArgProfileConfig withForwardWhenQueryArgProfileIsUnknown(Boolean forwardWhenQueryArgProfileIsUnknown) {
        this.forwardWhenQueryArgProfileIsUnknown = forwardWhenQueryArgProfileIsUnknown;
        return this;
    }
    public QueryArgProfiles queryArgProfiles;
    public QueryArgProfileConfig withQueryArgProfiles(QueryArgProfiles queryArgProfiles) {
        this.queryArgProfiles = queryArgProfiles;
        return this;
    }
}