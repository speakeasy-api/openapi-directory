import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRightsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetRightsRequest extends SpeakeasyBase {
    pathParams: GetRightsPathParams;
}
export declare class GetRightsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    functionalityRightInfos?: shared.FunctionalityRightInfo[];
}
