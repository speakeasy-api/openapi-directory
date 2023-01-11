package openapisdk.models.shared;



/**
 * InstallationMediaFailureCause
 * Contains the cause of an installation media failure. Installation media is used for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
**/
public class InstallationMediaFailureCause {
    public String message;
    public InstallationMediaFailureCause withMessage(String message) {
        this.message = message;
        return this;
    }
}