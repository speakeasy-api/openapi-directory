import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnableSharingWithAwsOrganizationRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableSharingWithAwsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableSharingWithAwsOrganizationResponse?: shared.EnableSharingWithAwsOrganizationResponse;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
}
