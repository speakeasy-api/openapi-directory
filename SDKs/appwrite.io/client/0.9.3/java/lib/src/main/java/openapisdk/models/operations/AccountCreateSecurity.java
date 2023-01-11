package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCreateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeProject project;
    public AccountCreateSecurity withProject(openapisdk.models.shared.SchemeProject project) {
        this.project = project;
        return this;
    }
}