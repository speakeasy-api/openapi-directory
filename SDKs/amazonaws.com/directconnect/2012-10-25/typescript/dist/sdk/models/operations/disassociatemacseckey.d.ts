import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateMacSecKeyXAmzTargetEnum {
    OvertureServiceDisassociateMacSecKey = "OvertureService.DisassociateMacSecKey"
}
export declare class DisassociateMacSecKeyRequest extends SpeakeasyBase {
    disassociateMacSecKeyRequest: shared.DisassociateMacSecKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateMacSecKeyXAmzTargetEnum;
}
export declare class DisassociateMacSecKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    /**
     * Success
     */
    disassociateMacSecKeyResponse?: shared.DisassociateMacSecKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
