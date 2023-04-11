import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterApplicationRevisionXAmzTargetEnum {
    CodeDeploy20141006RegisterApplicationRevision = "CodeDeploy_20141006.RegisterApplicationRevision"
}
export declare class RegisterApplicationRevisionRequest extends SpeakeasyBase {
    registerApplicationRevisionInput: shared.RegisterApplicationRevisionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterApplicationRevisionXAmzTargetEnum;
}
export declare class RegisterApplicationRevisionResponse extends SpeakeasyBase {
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
     * DescriptionTooLongException
     */
    descriptionTooLongException?: any;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidRevisionException
     */
    invalidRevisionException?: any;
    /**
     * RevisionRequiredException
     */
    revisionRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
