import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FilterFileDataStoppingsRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
/**
 * Filter the stopping words from the provided input file
 */
export declare class FilterFileDataStoppingsRequestBody extends SpeakeasyBase {
    file?: FilterFileDataStoppingsRequestBodyFile;
}
export declare class FilterFileDataStoppingsRequest extends SpeakeasyBase {
    /**
     * Filter the stopping words from the provided input file
     */
    requestBody: FilterFileDataStoppingsRequestBody;
    /**
     * provide the type of filtering required stopping/swear
     */
    type: string;
}
export declare class FilterFileDataStoppingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * model response
     */
    exudeResponseBean?: shared.ExudeResponseBean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
