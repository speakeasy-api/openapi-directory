package openapisdk.models.shared;



/**
 * InstallationMedia
 * Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
**/
public class InstallationMedia {
    public String customAvailabilityZoneId;
    public InstallationMedia withCustomAvailabilityZoneId(String customAvailabilityZoneId) {
        this.customAvailabilityZoneId = customAvailabilityZoneId;
        return this;
    }
    public String engine;
    public InstallationMedia withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineInstallationMediaPath;
    public InstallationMedia withEngineInstallationMediaPath(String engineInstallationMediaPath) {
        this.engineInstallationMediaPath = engineInstallationMediaPath;
        return this;
    }
    public String engineVersion;
    public InstallationMedia withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public InstallationMediaFailureCause failureCause;
    public InstallationMedia withFailureCause(InstallationMediaFailureCause failureCause) {
        this.failureCause = failureCause;
        return this;
    }
    public String installationMediaId;
    public InstallationMedia withInstallationMediaId(String installationMediaId) {
        this.installationMediaId = installationMediaId;
        return this;
    }
    public String osInstallationMediaPath;
    public InstallationMedia withOsInstallationMediaPath(String osInstallationMediaPath) {
        this.osInstallationMediaPath = osInstallationMediaPath;
        return this;
    }
    public String status;
    public InstallationMedia withStatus(String status) {
        this.status = status;
        return this;
    }
}