import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateApplicationFleetXAmzTargetEnum {
    PhotonAdminProxyServiceDisassociateApplicationFleet = "PhotonAdminProxyService.DisassociateApplicationFleet"
}
export declare class DisassociateApplicationFleetRequest extends SpeakeasyBase {
    disassociateApplicationFleetRequest: shared.DisassociateApplicationFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateApplicationFleetXAmzTargetEnum;
}
export declare class DisassociateApplicationFleetResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateApplicationFleetResult?: Record<string, any>;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
