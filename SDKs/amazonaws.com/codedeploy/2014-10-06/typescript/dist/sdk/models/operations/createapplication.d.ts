import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateApplicationXAmzTargetEnum {
    CodeDeploy20141006CreateApplication = "CodeDeploy_20141006.CreateApplication"
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    createApplicationInput: shared.CreateApplicationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationXAmzTargetEnum;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    /**
     * ApplicationAlreadyExistsException
     */
    applicationAlreadyExistsException?: any;
    /**
     * ApplicationLimitExceededException
     */
    applicationLimitExceededException?: any;
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    contentType: string;
    /**
     * Success
     */
    createApplicationOutput?: shared.CreateApplicationOutput;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidComputePlatformException
     */
    invalidComputePlatformException?: any;
    /**
     * InvalidTagsToAddException
     */
    invalidTagsToAddException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
