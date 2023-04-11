import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UnlabelParameterVersionXAmzTargetEnum {
    AmazonSSMUnlabelParameterVersion = "AmazonSSM.UnlabelParameterVersion"
}
export declare class UnlabelParameterVersionRequest extends SpeakeasyBase {
    unlabelParameterVersionRequest: shared.UnlabelParameterVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnlabelParameterVersionXAmzTargetEnum;
}
export declare class UnlabelParameterVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ParameterNotFound
     */
    parameterNotFound?: any;
    /**
     * ParameterVersionNotFound
     */
    parameterVersionNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
    /**
     * Success
     */
    unlabelParameterVersionResult?: shared.UnlabelParameterVersionResult;
}
