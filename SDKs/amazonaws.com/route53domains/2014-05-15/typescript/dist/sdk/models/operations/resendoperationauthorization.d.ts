import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResendOperationAuthorizationXAmzTargetEnum {
    Route53DomainsV20140515ResendOperationAuthorization = "Route53Domains_v20140515.ResendOperationAuthorization"
}
export declare class ResendOperationAuthorizationRequest extends SpeakeasyBase {
    resendOperationAuthorizationRequest: shared.ResendOperationAuthorizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResendOperationAuthorizationXAmzTargetEnum;
}
export declare class ResendOperationAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
