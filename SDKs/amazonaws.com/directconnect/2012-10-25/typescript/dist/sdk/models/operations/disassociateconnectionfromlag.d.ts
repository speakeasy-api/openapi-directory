import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateConnectionFromLagXAmzTargetEnum {
    OvertureServiceDisassociateConnectionFromLag = "OvertureService.DisassociateConnectionFromLag"
}
export declare class DisassociateConnectionFromLagRequest extends SpeakeasyBase {
    disassociateConnectionFromLagRequest: shared.DisassociateConnectionFromLagRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateConnectionFromLagXAmzTargetEnum;
}
export declare class DisassociateConnectionFromLagResponse extends SpeakeasyBase {
    /**
     * Success
     */
    connection?: shared.Connection;
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
