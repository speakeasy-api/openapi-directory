import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeleteSystemInstance = "IotThingsGraphFrontEndService.DeleteSystemInstance"
}
export declare class DeleteSystemInstanceRequest extends SpeakeasyBase {
    deleteSystemInstanceRequest: shared.DeleteSystemInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSystemInstanceXAmzTargetEnum;
}
export declare class DeleteSystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSystemInstanceResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
