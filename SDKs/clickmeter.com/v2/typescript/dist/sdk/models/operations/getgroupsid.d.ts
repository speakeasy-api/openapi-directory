import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupsIdRequest extends SpeakeasyBase {
    /**
     * The id of the group
     */
    id: number;
}
export declare class GetGroupsIdResponse extends SpeakeasyBase {
    apiCoreDtoGroupsGroup?: shared.ApiCoreDtoGroupsGroup;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
