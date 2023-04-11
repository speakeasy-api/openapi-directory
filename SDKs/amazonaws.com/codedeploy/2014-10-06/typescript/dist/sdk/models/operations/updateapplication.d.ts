import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApplicationXAmzTargetEnum {
    CodeDeploy20141006UpdateApplication = "CodeDeploy_20141006.UpdateApplication"
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    updateApplicationInput: shared.UpdateApplicationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationXAmzTargetEnum;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    /**
     * ApplicationAlreadyExistsException
     */
    applicationAlreadyExistsException?: any;
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
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
