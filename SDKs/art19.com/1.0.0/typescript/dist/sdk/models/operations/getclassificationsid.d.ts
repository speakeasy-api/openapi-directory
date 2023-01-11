import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClassificationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetClassificationsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Classification;
    links?: shared.ResourceLink;
}
export declare class GetClassificationsIdRequest extends SpeakeasyBase {
    pathParams: GetClassificationsIdPathParams;
}
export declare class GetClassificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getClassificationsId200ApplicationVndApiPlusJsonObject?: GetClassificationsId200ApplicationVndApiPlusJson;
}
