import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEndpointXAmzTargetEnum {
    AmazonDMSv20160101DeleteEndpoint = "AmazonDMSv20160101.DeleteEndpoint"
}
export declare class DeleteEndpointRequest extends SpeakeasyBase {
    deleteEndpointMessage: shared.DeleteEndpointMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointXAmzTargetEnum;
}
export declare class DeleteEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteEndpointResponse?: shared.DeleteEndpointResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
