import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEndpointXAmzTargetEnum {
    AmazonDMSv20160101CreateEndpoint = "AmazonDMSv20160101.CreateEndpoint"
}
export declare class CreateEndpointRequest extends SpeakeasyBase {
    createEndpointMessage: shared.CreateEndpointMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointXAmzTargetEnum;
}
export declare class CreateEndpointResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    createEndpointResponse?: shared.CreateEndpointResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * KMSKeyNotAccessibleFault
     */
    kmsKeyNotAccessibleFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    /**
     * S3AccessDeniedFault
     */
    s3AccessDeniedFault?: any;
}
