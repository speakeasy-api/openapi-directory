import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceCreateLogPattern = "EC2WindowsBarleyService.CreateLogPattern"
}
export declare class CreateLogPatternRequest extends SpeakeasyBase {
    createLogPatternRequest: shared.CreateLogPatternRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLogPatternXAmzTargetEnum;
}
export declare class CreateLogPatternResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLogPatternResponse?: shared.CreateLogPatternResponse;
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
