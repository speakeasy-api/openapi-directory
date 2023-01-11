import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUrlsExportStatusPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    urlExportId: string;
    username: string;
}
export declare class GetUrlsExportStatusRequest extends SpeakeasyBase {
    pathParams: GetUrlsExportStatusPathParams;
}
export declare class GetUrlsExportStatusResponse extends SpeakeasyBase {
    contentType: string;
    csvExportStatus?: shared.CsvExportStatus;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
}
