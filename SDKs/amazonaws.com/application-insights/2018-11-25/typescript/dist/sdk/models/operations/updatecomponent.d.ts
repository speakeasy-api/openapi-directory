import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateComponent = "EC2WindowsBarleyService.UpdateComponent"
}
export declare class UpdateComponentRequest extends SpeakeasyBase {
    updateComponentRequest: shared.UpdateComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateComponentXAmzTargetEnum;
}
export declare class UpdateComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateComponentResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
