import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationStartManualUpdatePathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class ImportationStartManualUpdateRequest extends SpeakeasyBase {
    pathParams: ImportationStartManualUpdatePathParams;
    request: shared.StartManualImportRequest;
}
export declare class ImportationStartManualUpdateResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
    linksImportationGetImportationMonitoringLink?: shared.LinksImportationGetImportationMonitoringLink;
}
