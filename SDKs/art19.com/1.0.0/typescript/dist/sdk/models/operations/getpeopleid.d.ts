import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPeopleIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPeopleId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Person;
    links?: shared.ResourceLink;
}
export declare class GetPeopleIdRequest extends SpeakeasyBase {
    pathParams: GetPeopleIdPathParams;
}
export declare class GetPeopleIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getPeopleId200ApplicationVndApiPlusJsonObject?: GetPeopleId200ApplicationVndApiPlusJson;
}
