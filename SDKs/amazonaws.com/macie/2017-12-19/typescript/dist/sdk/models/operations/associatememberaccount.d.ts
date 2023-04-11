import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateMemberAccountXAmzTargetEnum {
    MacieServiceAssociateMemberAccount = "MacieService.AssociateMemberAccount"
}
export declare class AssociateMemberAccountRequest extends SpeakeasyBase {
    associateMemberAccountRequest: shared.AssociateMemberAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateMemberAccountXAmzTargetEnum;
}
export declare class AssociateMemberAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
