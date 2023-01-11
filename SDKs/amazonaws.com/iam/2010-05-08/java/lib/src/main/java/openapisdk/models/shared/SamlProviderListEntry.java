package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * SamlProviderListEntry
 * Contains the list of SAML providers for this account.
**/
public class SamlProviderListEntry {
    public String arn;
    public SamlProviderListEntry withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public OffsetDateTime createDate;
    public SamlProviderListEntry withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public OffsetDateTime validUntil;
    public SamlProviderListEntry withValidUntil(OffsetDateTime validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}