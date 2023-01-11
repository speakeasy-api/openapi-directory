import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportDataRequest extends SpeakeasyBase {
    request: Uint8Array;
}
export declare class ImportDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
