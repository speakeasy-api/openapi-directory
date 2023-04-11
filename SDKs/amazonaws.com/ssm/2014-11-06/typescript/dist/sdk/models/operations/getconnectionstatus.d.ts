import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetConnectionStatusXAmzTargetEnum {
    AmazonSSMGetConnectionStatus = "AmazonSSM.GetConnectionStatus"
}
export declare class GetConnectionStatusRequest extends SpeakeasyBase {
    getConnectionStatusRequest: shared.GetConnectionStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConnectionStatusXAmzTargetEnum;
}
export declare class GetConnectionStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getConnectionStatusResponse?: shared.GetConnectionStatusResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
