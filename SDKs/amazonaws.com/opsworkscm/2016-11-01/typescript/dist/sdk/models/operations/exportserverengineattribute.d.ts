import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportServerEngineAttributeXAmzTargetEnum {
    OpsWorksCMV20161101ExportServerEngineAttribute = "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute"
}
export declare class ExportServerEngineAttributeRequest extends SpeakeasyBase {
    exportServerEngineAttributeRequest: shared.ExportServerEngineAttributeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportServerEngineAttributeXAmzTargetEnum;
}
export declare class ExportServerEngineAttributeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    exportServerEngineAttributeResponse?: shared.ExportServerEngineAttributeResponse;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
