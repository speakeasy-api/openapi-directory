import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCorsPolicyXAmzTargetEnum {
    MediaStore20170901GetCorsPolicy = "MediaStore_20170901.GetCorsPolicy"
}
export declare class GetCorsPolicyRequest extends SpeakeasyBase {
    getCorsPolicyInput: shared.GetCorsPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCorsPolicyXAmzTargetEnum;
}
export declare class GetCorsPolicyResponse extends SpeakeasyBase {
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
    getCorsPolicyOutput?: shared.GetCorsPolicyOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
