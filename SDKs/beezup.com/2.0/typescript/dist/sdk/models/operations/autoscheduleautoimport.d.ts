import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutoScheduleAutoImportPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class AutoScheduleAutoImportRequest extends SpeakeasyBase {
    pathParams: AutoScheduleAutoImportPathParams;
    request: shared.ScheduleAutoImportRequest;
}
export declare class AutoScheduleAutoImportResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
