package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretScanningUpdateAlertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alert_number")
    public Long alertNumber;
    public SecretScanningUpdateAlertPathParams withAlertNumber(Long alertNumber) {
        this.alertNumber = alertNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public SecretScanningUpdateAlertPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public SecretScanningUpdateAlertPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}