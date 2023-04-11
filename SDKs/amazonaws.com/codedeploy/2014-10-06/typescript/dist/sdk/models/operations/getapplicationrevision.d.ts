import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetApplicationRevisionXAmzTargetEnum {
    CodeDeploy20141006GetApplicationRevision = "CodeDeploy_20141006.GetApplicationRevision"
}
export declare class GetApplicationRevisionRequest extends SpeakeasyBase {
    getApplicationRevisionInput: shared.GetApplicationRevisionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetApplicationRevisionXAmzTargetEnum;
}
export declare class GetApplicationRevisionResponse extends SpeakeasyBase {
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
    getApplicationRevisionOutput?: shared.GetApplicationRevisionOutput;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidRevisionException
     */
    invalidRevisionException?: any;
    /**
     * RevisionDoesNotExistException
     */
    revisionDoesNotExistException?: any;
    /**
     * RevisionRequiredException
     */
    revisionRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
