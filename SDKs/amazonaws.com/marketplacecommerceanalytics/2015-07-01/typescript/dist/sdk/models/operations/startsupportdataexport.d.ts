import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSupportDataExportXAmzTargetEnum {
    MarketplaceCommerceAnalytics20150701StartSupportDataExport = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport"
}
export declare class StartSupportDataExportRequest extends SpeakeasyBase {
    startSupportDataExportRequest: shared.StartSupportDataExportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSupportDataExportXAmzTargetEnum;
}
export declare class StartSupportDataExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MarketplaceCommerceAnalyticsException
     */
    marketplaceCommerceAnalyticsException?: any;
    /**
     * Success
     */
    startSupportDataExportResult?: shared.StartSupportDataExportResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
