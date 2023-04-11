import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchSpacesIdRequestBodyLogo extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
/**
 * Space to modify (except private)
 */
export declare class PatchSpacesIdRequestBody extends SpeakeasyBase {
    logo?: PatchSpacesIdRequestBodyLogo;
    name?: string;
    templateSpaceId?: string;
}
export declare class PatchSpacesIdRequest extends SpeakeasyBase {
    /**
     * Space to modify (except private)
     */
    requestBody: PatchSpacesIdRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
export declare class PatchSpacesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
