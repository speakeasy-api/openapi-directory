import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGroupUsersPathParams extends SpeakeasyBase {
    group: string;
}
export declare enum ListGroupUsersSourceEnum {
    GoogleClassroom = "googleClassroom",
    MicrosoftGraph = "microsoftGraph",
    Clever = "clever"
}
export declare class ListGroupUsersQueryParams extends SpeakeasyBase {
    source?: ListGroupUsersSourceEnum;
}
export declare class ListGroupUsersSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListGroupUsersRequest extends SpeakeasyBase {
    pathParams: ListGroupUsersPathParams;
    queryParams: ListGroupUsersQueryParams;
    security: ListGroupUsersSecurity;
}
export declare class ListGroupUsersResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    userPublics?: shared.UserPublic[];
}
