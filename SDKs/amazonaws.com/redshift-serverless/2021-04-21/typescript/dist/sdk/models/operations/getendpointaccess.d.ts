import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEndpointAccessXAmzTargetEnum {
    RedshiftServerlessGetEndpointAccess = "RedshiftServerless.GetEndpointAccess"
}
export declare class GetEndpointAccessRequest extends SpeakeasyBase {
    getEndpointAccessRequest: shared.GetEndpointAccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEndpointAccessXAmzTargetEnum;
}
export declare class GetEndpointAccessResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    getEndpointAccessResponse?: shared.GetEndpointAccessResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
