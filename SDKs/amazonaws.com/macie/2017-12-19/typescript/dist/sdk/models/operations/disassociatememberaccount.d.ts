import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateMemberAccountXAmzTargetEnum {
    MacieServiceDisassociateMemberAccount = "MacieService.DisassociateMemberAccount"
}
export declare class DisassociateMemberAccountRequest extends SpeakeasyBase {
    disassociateMemberAccountRequest: shared.DisassociateMemberAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateMemberAccountXAmzTargetEnum;
}
export declare class DisassociateMemberAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
