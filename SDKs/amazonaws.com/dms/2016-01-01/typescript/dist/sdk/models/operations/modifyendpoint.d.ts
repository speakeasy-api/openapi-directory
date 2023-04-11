import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyEndpointXAmzTargetEnum {
    AmazonDMSv20160101ModifyEndpoint = "AmazonDMSv20160101.ModifyEndpoint"
}
export declare class ModifyEndpointRequest extends SpeakeasyBase {
    modifyEndpointMessage: shared.ModifyEndpointMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyEndpointXAmzTargetEnum;
}
export declare class ModifyEndpointResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * KMSKeyNotAccessibleFault
     */
    kmsKeyNotAccessibleFault?: any;
    /**
     * Success
     */
    modifyEndpointResponse?: shared.ModifyEndpointResponse;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
}
