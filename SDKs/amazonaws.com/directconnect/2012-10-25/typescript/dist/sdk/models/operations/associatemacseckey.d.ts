import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateMacSecKeyXAmzTargetEnum {
    OvertureServiceAssociateMacSecKey = "OvertureService.AssociateMacSecKey"
}
export declare class AssociateMacSecKeyRequest extends SpeakeasyBase {
    associateMacSecKeyRequest: shared.AssociateMacSecKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateMacSecKeyXAmzTargetEnum;
}
export declare class AssociateMacSecKeyResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateMacSecKeyResponse?: shared.AssociateMacSecKeyResponse;
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
