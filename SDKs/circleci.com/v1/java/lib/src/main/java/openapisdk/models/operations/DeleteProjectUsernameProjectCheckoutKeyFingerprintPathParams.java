package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fingerprint")
    public String fingerprint;
    public DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}