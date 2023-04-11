import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ReloadTablesXAmzTargetEnum {
    AmazonDMSv20160101ReloadTables = "AmazonDMSv20160101.ReloadTables"
}
export declare class ReloadTablesRequest extends SpeakeasyBase {
    reloadTablesMessage: shared.ReloadTablesMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReloadTablesXAmzTargetEnum;
}
export declare class ReloadTablesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * Success
     */
    reloadTablesResponse?: shared.ReloadTablesResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
