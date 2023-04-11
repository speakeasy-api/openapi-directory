import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateApplicationXAmzTargetEnum {
    Ec2WindowsBarleyServiceCreateApplication = "EC2WindowsBarleyService.CreateApplication"
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    createApplicationRequest: shared.CreateApplicationRequest;
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
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createApplicationResponse?: shared.CreateApplicationResponse;
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
     * TagsAlreadyExistException
     */
    tagsAlreadyExistException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
