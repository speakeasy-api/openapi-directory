import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateNodeXAmzTargetEnum {
    OpsWorksCMV20161101DisassociateNode = "OpsWorksCM_V2016_11_01.DisassociateNode"
}
export declare class DisassociateNodeRequest extends SpeakeasyBase {
    disassociateNodeRequest: shared.DisassociateNodeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateNodeXAmzTargetEnum;
}
export declare class DisassociateNodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateNodeResponse?: shared.DisassociateNodeResponse;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
