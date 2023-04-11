import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdPersonsIdCallForDocumentSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdPersonsIdCallForDocumentRequest extends SpeakeasyBase {
    /**
     * Infos to invite
     */
    callForDocument: shared.CallForDocument;
    /**
     * Id of the person or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of the folder of the person invited
 */
export declare class PostSpacesSpaceIdPersonsIdCallForDocument201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdPersonsIdCallForDocumentResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of the folder of the person invited
     */
    postSpacesSpaceIdPersonsIdCallForDocument201ApplicationJSONObject?: PostSpacesSpaceIdPersonsIdCallForDocument201ApplicationJSON;
}
