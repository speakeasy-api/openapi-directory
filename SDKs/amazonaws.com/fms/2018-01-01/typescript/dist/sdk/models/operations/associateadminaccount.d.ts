import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateAdminAccountXAmzTargetEnum {
    AWSFMS20180101AssociateAdminAccount = "AWSFMS_20180101.AssociateAdminAccount"
}
export declare class AssociateAdminAccountRequest extends SpeakeasyBase {
    associateAdminAccountRequest: shared.AssociateAdminAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateAdminAccountXAmzTargetEnum;
}
export declare class AssociateAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
