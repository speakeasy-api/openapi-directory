package openapisdk.models.operations;



public class ProtocolTelnetServerGetUsersResponse {
    public String contentType;
    public ProtocolTelnetServerGetUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetServerGetUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TelnetUser[] telnetUsers;
    public ProtocolTelnetServerGetUsersResponse withTelnetUsers(openapisdk.models.shared.TelnetUser[] telnetUsers) {
        this.telnetUsers = telnetUsers;
        return this;
    }
}