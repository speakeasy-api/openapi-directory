package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * GetSamlProviderResponse
 * Contains the response to a successful <a>GetSAMLProvider</a> request. 
**/
public class GetSamlProviderResponse {
    public OffsetDateTime createDate;
    public GetSamlProviderResponse withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String samlMetadataDocument;
    public GetSamlProviderResponse withSamlMetadataDocument(String samlMetadataDocument) {
        this.samlMetadataDocument = samlMetadataDocument;
        return this;
    }
    public Tag[] tags;
    public GetSamlProviderResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    public OffsetDateTime validUntil;
    public GetSamlProviderResponse withValidUntil(OffsetDateTime validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}