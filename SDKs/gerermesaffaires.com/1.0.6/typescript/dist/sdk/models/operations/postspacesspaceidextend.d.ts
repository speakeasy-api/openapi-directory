import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdExtendSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdExtendRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of document created
 */
export declare class PostSpacesSpaceIdExtend201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdExtendResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdExtend201ApplicationJSONObject?: PostSpacesSpaceIdExtend201ApplicationJSON;
}
