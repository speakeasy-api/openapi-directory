import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationActivateAutoImportPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class ImportationActivateAutoImportRequest extends SpeakeasyBase {
    pathParams: ImportationActivateAutoImportPathParams;
}
export declare class ImportationActivateAutoImportResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
