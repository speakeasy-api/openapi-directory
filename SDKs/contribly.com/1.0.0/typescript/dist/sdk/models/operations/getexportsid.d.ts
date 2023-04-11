import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExportsIdRequest extends SpeakeasyBase {
    /**
     * Id of the export job to return
     */
    id: string;
}
export declare class GetExportsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful
     */
    export?: shared.Export;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
