package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocaleGetContinentsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeJwt jwt;
    public LocaleGetContinentsSecurity withJwt(openapisdk.models.shared.SchemeJwt jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeKey key;
    public LocaleGetContinentsSecurity withKey(openapisdk.models.shared.SchemeKey key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeProject project;
    public LocaleGetContinentsSecurity withProject(openapisdk.models.shared.SchemeProject project) {
        this.project = project;
        return this;
    }
}