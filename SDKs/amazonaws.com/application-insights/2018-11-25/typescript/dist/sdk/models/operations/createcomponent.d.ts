import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceCreateComponent = "EC2WindowsBarleyService.CreateComponent"
}
export declare class CreateComponentRequest extends SpeakeasyBase {
    createComponentRequest: shared.CreateComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateComponentXAmzTargetEnum;
}
export declare class CreateComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createComponentResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
