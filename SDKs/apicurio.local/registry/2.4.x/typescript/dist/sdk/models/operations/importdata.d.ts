import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportDataRequest extends SpeakeasyBase {
    /**
     * The ZIP file representing the previously exported registry data.
     */
    requestBody: Uint8Array;
    /**
     * If this header is set to false, content ids of imported data will be ignored and replaced by next id in content id sequence. The mapping between content and artifacts will be preserved. This allows to import any data even thought the content ids would cause a conflict.
     */
    xRegistryPreserveContentId?: boolean;
    /**
     * If this header is set to false, global ids of imported data will be ignored and replaced by next id in global id sequence. This allows to import any data even thought the global ids would cause a conflict.
     */
    xRegistryPreserveGlobalId?: boolean;
}
export declare class ImportDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
