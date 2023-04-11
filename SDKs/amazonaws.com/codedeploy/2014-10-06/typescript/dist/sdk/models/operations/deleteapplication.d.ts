import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApplicationXAmzTargetEnum {
    CodeDeploy20141006DeleteApplication = "CodeDeploy_20141006.DeleteApplication"
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    deleteApplicationInput: shared.DeleteApplicationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationXAmzTargetEnum;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    contentType: string;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
