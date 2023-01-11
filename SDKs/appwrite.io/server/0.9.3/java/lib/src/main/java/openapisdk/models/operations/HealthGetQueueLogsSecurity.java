package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HealthGetQueueLogsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeKey key;
    public HealthGetQueueLogsSecurity withKey(openapisdk.models.shared.SchemeKey key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeProject project;
    public HealthGetQueueLogsSecurity withProject(openapisdk.models.shared.SchemeProject project) {
        this.project = project;
        return this;
    }
}