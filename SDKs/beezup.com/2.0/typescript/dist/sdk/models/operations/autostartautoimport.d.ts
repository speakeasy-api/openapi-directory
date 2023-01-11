import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutoStartAutoImportPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class AutoStartAutoImportRequest extends SpeakeasyBase {
    pathParams: AutoStartAutoImportPathParams;
}
export declare class AutoStartAutoImportResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    linksImportationGetImportationMonitoringLink?: shared.LinksImportationGetImportationMonitoringLink;
}
