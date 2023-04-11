import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateKmsKeyXAmzTargetEnum {
    Logs20140328AssociateKmsKey = "Logs_20140328.AssociateKmsKey"
}
export declare class AssociateKmsKeyRequest extends SpeakeasyBase {
    associateKmsKeyRequest: shared.AssociateKmsKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateKmsKeyXAmzTargetEnum;
}
export declare class AssociateKmsKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OperationAbortedException
     */
    operationAbortedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
