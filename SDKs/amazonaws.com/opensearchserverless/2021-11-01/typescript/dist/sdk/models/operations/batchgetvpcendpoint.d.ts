import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetVpcEndpointXAmzTargetEnum {
    OpenSearchServerlessBatchGetVpcEndpoint = "OpenSearchServerless.BatchGetVpcEndpoint"
}
export declare class BatchGetVpcEndpointRequest extends SpeakeasyBase {
    batchGetVpcEndpointRequest: shared.BatchGetVpcEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetVpcEndpointXAmzTargetEnum;
}
export declare class BatchGetVpcEndpointResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetVpcEndpointResponse?: shared.BatchGetVpcEndpointResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
