import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationUnmapCustomColumnPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationUnmapCustomColumnRequest extends SpeakeasyBase {
    pathParams: ImportationUnmapCustomColumnPathParams;
}
export declare class ImportationUnmapCustomColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
