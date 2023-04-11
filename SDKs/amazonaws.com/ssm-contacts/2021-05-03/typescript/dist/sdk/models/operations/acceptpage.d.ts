import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptPageXAmzTargetEnum {
    SSMContactsAcceptPage = "SSMContacts.AcceptPage"
}
export declare class AcceptPageRequest extends SpeakeasyBase {
    acceptPageRequest: shared.AcceptPageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptPageXAmzTargetEnum;
}
export declare class AcceptPageResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptPageResult?: Record<string, any>;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
