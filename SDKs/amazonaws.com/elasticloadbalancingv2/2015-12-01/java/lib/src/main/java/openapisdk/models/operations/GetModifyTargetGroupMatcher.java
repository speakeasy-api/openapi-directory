package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetModifyTargetGroupMatcher
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
**/
public class GetModifyTargetGroupMatcher {
    @SpeakeasyMetadata("queryParam:name=GrpcCode")
    public String grpcCode;
    public GetModifyTargetGroupMatcher withGrpcCode(String grpcCode) {
        this.grpcCode = grpcCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=HttpCode")
    public String httpCode;
    public GetModifyTargetGroupMatcher withHttpCode(String httpCode) {
        this.httpCode = httpCode;
        return this;
    }
}