import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateLogPattern = "EC2WindowsBarleyService.UpdateLogPattern"
}
export declare class UpdateLogPatternRequest extends SpeakeasyBase {
    updateLogPatternRequest: shared.UpdateLogPatternRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLogPatternXAmzTargetEnum;
}
export declare class UpdateLogPatternResponse extends SpeakeasyBase {
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
    updateLogPatternResponse?: shared.UpdateLogPatternResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
