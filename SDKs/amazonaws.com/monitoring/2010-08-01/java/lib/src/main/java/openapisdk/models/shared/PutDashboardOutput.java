package openapisdk.models.shared;



public class PutDashboardOutput {
    public DashboardValidationMessage[] dashboardValidationMessages;
    public PutDashboardOutput withDashboardValidationMessages(DashboardValidationMessage[] dashboardValidationMessages) {
        this.dashboardValidationMessages = dashboardValidationMessages;
        return this;
    }
}