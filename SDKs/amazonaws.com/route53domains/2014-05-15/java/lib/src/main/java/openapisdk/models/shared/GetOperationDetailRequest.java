package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetOperationDetailRequest
 * The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element.
**/
public class GetOperationDetailRequest {
    @JsonProperty("OperationId")
    public String operationId;
    public GetOperationDetailRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}