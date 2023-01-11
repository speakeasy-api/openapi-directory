import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAutomaticTransitionsQueryParams extends SpeakeasyBase {
    storeId?: string;
}
export declare class GetAutomaticTransitionsHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetAutomaticTransitionsRequest extends SpeakeasyBase {
    queryParams: GetAutomaticTransitionsQueryParams;
    headers: GetAutomaticTransitionsHeaders;
}
export declare class GetAutomaticTransitionsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    automaticTransitionInfoList?: shared.AutomaticTransitionInfoList;
}
