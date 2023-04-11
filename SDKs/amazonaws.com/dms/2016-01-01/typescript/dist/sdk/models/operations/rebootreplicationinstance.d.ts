import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RebootReplicationInstanceXAmzTargetEnum {
    AmazonDMSv20160101RebootReplicationInstance = "AmazonDMSv20160101.RebootReplicationInstance"
}
export declare class RebootReplicationInstanceRequest extends SpeakeasyBase {
    rebootReplicationInstanceMessage: shared.RebootReplicationInstanceMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebootReplicationInstanceXAmzTargetEnum;
}
export declare class RebootReplicationInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * Success
     */
    rebootReplicationInstanceResponse?: shared.RebootReplicationInstanceResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
