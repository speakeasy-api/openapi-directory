import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchStylesPathRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PatchStylesPathRequestBody extends SpeakeasyBase {
    /**
     * Logo for custom branding.
     */
    file: PatchStylesPathRequestBodyFile;
}
export declare class PatchStylesPathRequest extends SpeakeasyBase {
    requestBody: PatchStylesPathRequestBody;
    /**
     * Style path.
     */
    path: string;
}
export declare class PatchStylesPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The Styles object.
     */
    styleEntity?: shared.StyleEntity;
}
