package openapisdk.models.shared;



/**
 * ErrorDetails
 * <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
**/
public class ErrorDetails {
    public String code;
    public ErrorDetails withCode(String code) {
        this.code = code;
        return this;
    }
    public String message;
    public ErrorDetails withMessage(String message) {
        this.message = message;
        return this;
    }
}