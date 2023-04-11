import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCorsPolicyXAmzTargetEnum {
    MediaStore20170901DeleteCorsPolicy = "MediaStore_20170901.DeleteCorsPolicy"
}
export declare class DeleteCorsPolicyRequest extends SpeakeasyBase {
    deleteCorsPolicyInput: shared.DeleteCorsPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCorsPolicyXAmzTargetEnum;
}
export declare class DeleteCorsPolicyResponse extends SpeakeasyBase {
    /**
     * ContainerInUseException
     */
    containerInUseException?: any;
    /**
     * ContainerNotFoundException
     */
    containerNotFoundException?: any;
    contentType: string;
    /**
     * CorsPolicyNotFoundException
     */
    corsPolicyNotFoundException?: any;
    /**
     * Success
     */
    deleteCorsPolicyOutput?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
