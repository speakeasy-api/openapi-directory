package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningListAlertsInstancesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alert_number")
    public Long alertNumber;
    public CodeScanningListAlertsInstancesPathParams withAlertNumber(Long alertNumber) {
        this.alertNumber = alertNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public CodeScanningListAlertsInstancesPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public CodeScanningListAlertsInstancesPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}