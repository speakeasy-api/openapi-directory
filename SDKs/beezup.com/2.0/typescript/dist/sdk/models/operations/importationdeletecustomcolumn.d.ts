import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationDeleteCustomColumnPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationDeleteCustomColumnRequest extends SpeakeasyBase {
    pathParams: ImportationDeleteCustomColumnPathParams;
}
export declare class ImportationDeleteCustomColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
