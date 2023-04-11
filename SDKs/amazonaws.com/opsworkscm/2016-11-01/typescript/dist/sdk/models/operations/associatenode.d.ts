import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateNodeXAmzTargetEnum {
    OpsWorksCMV20161101AssociateNode = "OpsWorksCM_V2016_11_01.AssociateNode"
}
export declare class AssociateNodeRequest extends SpeakeasyBase {
    associateNodeRequest: shared.AssociateNodeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateNodeXAmzTargetEnum;
}
export declare class AssociateNodeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateNodeResponse?: shared.AssociateNodeResponse;
    contentType: string;
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
