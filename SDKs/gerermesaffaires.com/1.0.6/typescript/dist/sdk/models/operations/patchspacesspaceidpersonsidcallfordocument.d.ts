import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchSpacesSpaceIdPersonsIdCallForDocumentSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PatchSpacesSpaceIdPersonsIdCallForDocumentRequest extends SpeakeasyBase {
    /**
     * Infos to invite
     */
    modifyCollect: shared.ModifyCollect;
    /**
     * Id of the person
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdPersonsIdCallForDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
