package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetLogsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeKey key;
    public UsersGetLogsSecurity withKey(openapisdk.models.shared.SchemeKey key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeProject project;
    public UsersGetLogsSecurity withProject(openapisdk.models.shared.SchemeProject project) {
        this.project = project;
        return this;
    }
}