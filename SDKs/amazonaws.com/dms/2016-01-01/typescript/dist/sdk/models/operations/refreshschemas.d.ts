import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RefreshSchemasXAmzTargetEnum {
    AmazonDMSv20160101RefreshSchemas = "AmazonDMSv20160101.RefreshSchemas"
}
export declare class RefreshSchemasRequest extends SpeakeasyBase {
    refreshSchemasMessage: shared.RefreshSchemasMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RefreshSchemasXAmzTargetEnum;
}
export declare class RefreshSchemasResponse extends SpeakeasyBase {
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
    refreshSchemasResponse?: shared.RefreshSchemasResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
}
