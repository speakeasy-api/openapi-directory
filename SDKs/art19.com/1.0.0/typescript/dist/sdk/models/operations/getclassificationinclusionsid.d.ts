import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClassificationInclusionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetClassificationInclusionsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.ClassificationInclusion;
    links?: shared.ResourceLink;
}
export declare class GetClassificationInclusionsIdRequest extends SpeakeasyBase {
    pathParams: GetClassificationInclusionsIdPathParams;
}
export declare class GetClassificationInclusionsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getClassificationInclusionsId200ApplicationVndApiPlusJsonObject?: GetClassificationInclusionsId200ApplicationVndApiPlusJson;
}
