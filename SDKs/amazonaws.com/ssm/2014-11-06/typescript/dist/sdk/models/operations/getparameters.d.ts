import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetParametersXAmzTargetEnum {
    AmazonSSMGetParameters = "AmazonSSM.GetParameters"
}
export declare class GetParametersRequest extends SpeakeasyBase {
    getParametersRequest: shared.GetParametersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParametersXAmzTargetEnum;
}
export declare class GetParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getParametersResult?: shared.GetParametersResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidKeyId
     */
    invalidKeyId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
