package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeDjangoRestToken djangoRestToken;
    public Security withDjangoRestToken(SchemeDjangoRestToken djangoRestToken) {
        this.djangoRestToken = djangoRestToken;
        return this;
    }
}