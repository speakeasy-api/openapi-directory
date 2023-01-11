import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationIgnoreColumnPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationIgnoreColumnRequest extends SpeakeasyBase {
    pathParams: ImportationIgnoreColumnPathParams;
}
export declare class ImportationIgnoreColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
