import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateStackXAmzTargetEnum {
    OpsWorks20130218CreateStack = "OpsWorks_20130218.CreateStack"
}
export declare class CreateStackRequest extends SpeakeasyBase {
    createStackRequest: shared.CreateStackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStackXAmzTargetEnum;
}
export declare class CreateStackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createStackResult?: shared.CreateStackResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
