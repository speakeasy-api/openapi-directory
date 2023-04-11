import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceDeleteComponent = "EC2WindowsBarleyService.DeleteComponent"
}
export declare class DeleteComponentRequest extends SpeakeasyBase {
    deleteComponentRequest: shared.DeleteComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteComponentXAmzTargetEnum;
}
export declare class DeleteComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteComponentResponse?: Record<string, any>;
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
     * ValidationException
     */
    validationException?: any;
}
