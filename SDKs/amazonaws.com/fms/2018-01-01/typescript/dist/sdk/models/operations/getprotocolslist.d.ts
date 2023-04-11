import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetProtocolsListXAmzTargetEnum {
    AWSFMS20180101GetProtocolsList = "AWSFMS_20180101.GetProtocolsList"
}
export declare class GetProtocolsListRequest extends SpeakeasyBase {
    getProtocolsListRequest: shared.GetProtocolsListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetProtocolsListXAmzTargetEnum;
}
export declare class GetProtocolsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getProtocolsListResponse?: shared.GetProtocolsListResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
