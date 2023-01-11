package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectUsernameProjectCheckoutKeyFingerprintPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fingerprint")
    public String fingerprint;
    public GetProjectUsernameProjectCheckoutKeyFingerprintPathParams withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public GetProjectUsernameProjectCheckoutKeyFingerprintPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetProjectUsernameProjectCheckoutKeyFingerprintPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}