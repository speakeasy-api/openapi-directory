import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApplicationXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateApplication = "EC2WindowsBarleyService.UpdateApplication"
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    updateApplicationRequest: shared.UpdateApplicationRequest;
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
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateApplicationResponse?: shared.UpdateApplicationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
