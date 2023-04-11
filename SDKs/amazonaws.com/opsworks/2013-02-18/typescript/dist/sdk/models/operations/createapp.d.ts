import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAppXAmzTargetEnum {
    OpsWorks20130218CreateApp = "OpsWorks_20130218.CreateApp"
}
export declare class CreateAppRequest extends SpeakeasyBase {
    createAppRequest: shared.CreateAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAppXAmzTargetEnum;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAppResult?: shared.CreateAppResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
