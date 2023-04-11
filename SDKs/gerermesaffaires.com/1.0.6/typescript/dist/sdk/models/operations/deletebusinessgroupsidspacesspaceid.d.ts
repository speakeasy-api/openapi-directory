import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteBusinessGroupsIdSpacesSpaceIdSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class DeleteBusinessGroupsIdSpacesSpaceIdRequest extends SpeakeasyBase {
    /**
     * Id of the group of the customer space
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class DeleteBusinessGroupsIdSpacesSpaceIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
