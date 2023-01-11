package openapisdk.models.shared;



/**
 * Matcher
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
**/
public class Matcher {
    public String grpcCode;
    public Matcher withGrpcCode(String grpcCode) {
        this.grpcCode = grpcCode;
        return this;
    }
    public String httpCode;
    public Matcher withHttpCode(String httpCode) {
        this.httpCode = httpCode;
        return this;
    }
}