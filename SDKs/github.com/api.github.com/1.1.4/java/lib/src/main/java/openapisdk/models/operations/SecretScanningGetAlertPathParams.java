package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretScanningGetAlertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alert_number")
    public Long alertNumber;
    public SecretScanningGetAlertPathParams withAlertNumber(Long alertNumber) {
        this.alertNumber = alertNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public SecretScanningGetAlertPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public SecretScanningGetAlertPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}