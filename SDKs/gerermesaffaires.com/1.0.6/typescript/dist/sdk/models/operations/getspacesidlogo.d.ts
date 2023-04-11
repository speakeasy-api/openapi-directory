import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdLogoRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdLogoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * A space
     */
    space?: shared.Space;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
