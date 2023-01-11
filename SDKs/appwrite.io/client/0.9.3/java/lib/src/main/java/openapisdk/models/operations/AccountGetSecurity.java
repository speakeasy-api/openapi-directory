package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountGetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeJwt jwt;
    public AccountGetSecurity withJwt(openapisdk.models.shared.SchemeJwt jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeProject project;
    public AccountGetSecurity withProject(openapisdk.models.shared.SchemeProject project) {
        this.project = project;
        return this;
    }
}