import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSoftwareUpdatesXAmzTargetEnum {
    AWSIESnowballJobManagementServiceGetSoftwareUpdates = "AWSIESnowballJobManagementService.GetSoftwareUpdates"
}
export declare class GetSoftwareUpdatesRequest extends SpeakeasyBase {
    getSoftwareUpdatesRequest: shared.GetSoftwareUpdatesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSoftwareUpdatesXAmzTargetEnum;
}
export declare class GetSoftwareUpdatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSoftwareUpdatesResult?: shared.GetSoftwareUpdatesResult;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
