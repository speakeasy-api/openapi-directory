import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    fileContent?: Uint8Array;
    statusCode: number;
}
