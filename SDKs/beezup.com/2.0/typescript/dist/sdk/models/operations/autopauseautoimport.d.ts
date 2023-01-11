import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutoPauseAutoImportPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class AutoPauseAutoImportRequest extends SpeakeasyBase {
    pathParams: AutoPauseAutoImportPathParams;
}
export declare class AutoPauseAutoImportResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
