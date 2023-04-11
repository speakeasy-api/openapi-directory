import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum LabelParameterVersionXAmzTargetEnum {
    AmazonSSMLabelParameterVersion = "AmazonSSM.LabelParameterVersion"
}
export declare class LabelParameterVersionRequest extends SpeakeasyBase {
    labelParameterVersionRequest: shared.LabelParameterVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: LabelParameterVersionXAmzTargetEnum;
}
export declare class LabelParameterVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    labelParameterVersionResult?: shared.LabelParameterVersionResult;
    /**
     * ParameterNotFound
     */
    parameterNotFound?: any;
    /**
     * ParameterVersionLabelLimitExceeded
     */
    parameterVersionLabelLimitExceeded?: any;
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
}
