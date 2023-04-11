import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServiceDeleteRemediationExceptions = "StarlingDoveService.DeleteRemediationExceptions"
}
export declare class DeleteRemediationExceptionsRequest extends SpeakeasyBase {
    deleteRemediationExceptionsRequest: shared.DeleteRemediationExceptionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRemediationExceptionsXAmzTargetEnum;
}
export declare class DeleteRemediationExceptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRemediationExceptionsResponse?: shared.DeleteRemediationExceptionsResponse;
    /**
     * NoSuchRemediationExceptionException
     */
    noSuchRemediationExceptionException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
