import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetApplicationXAmzTargetEnum {
    CodeDeploy20141006GetApplication = "CodeDeploy_20141006.GetApplication"
}
export declare class GetApplicationRequest extends SpeakeasyBase {
    getApplicationInput: shared.GetApplicationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetApplicationXAmzTargetEnum;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    /**
     * ApplicationDoesNotExistException
     */
    applicationDoesNotExistException?: any;
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    contentType: string;
    /**
     * Success
     */
    getApplicationOutput?: shared.GetApplicationOutput;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
