import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationSaveCustomColumnPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationSaveCustomColumnRequest extends SpeakeasyBase {
    pathParams: ImportationSaveCustomColumnPathParams;
    request: shared.ChangeCustomColumnRequest;
}
export declare class ImportationSaveCustomColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
