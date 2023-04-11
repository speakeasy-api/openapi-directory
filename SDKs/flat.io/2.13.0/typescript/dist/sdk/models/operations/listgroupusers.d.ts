import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListGroupUsersSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * Filter the users by their source
 *
 * @remarks
 *
 */
export declare enum ListGroupUsersSourceEnum {
    GoogleClassroom = "googleClassroom",
    MicrosoftGraph = "microsoftGraph",
    Clever = "clever"
}
export declare class ListGroupUsersRequest extends SpeakeasyBase {
    /**
     * Unique identifier of a Flat group
     *
     * @remarks
     *
     */
    group: string;
    /**
     * Filter the users by their source
     *
     * @remarks
     *
     */
    source?: ListGroupUsersSourceEnum;
}
export declare class ListGroupUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The list of users member of the group
     */
    userPublics?: shared.UserPublic[];
}
