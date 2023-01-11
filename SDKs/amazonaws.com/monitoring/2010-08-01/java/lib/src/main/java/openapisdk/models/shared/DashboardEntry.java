package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DashboardEntry
 * Represents a specific dashboard.
**/
public class DashboardEntry {
    public String dashboardArn;
    public DashboardEntry withDashboardArn(String dashboardArn) {
        this.dashboardArn = dashboardArn;
        return this;
    }
    public String dashboardName;
    public DashboardEntry withDashboardName(String dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    }
    public OffsetDateTime lastModified;
    public DashboardEntry withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    public Long size;
    public DashboardEntry withSize(Long size) {
        this.size = size;
        return this;
    }
}