import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BehaviorListForPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class BehaviorListForPathQueryParams extends SpeakeasyBase {
    behavior?: string;
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    perPage?: number;
    recursive?: string;
    sortBy?: Record<string, any>;
}
export declare class BehaviorListForPathRequest extends SpeakeasyBase {
    pathParams: BehaviorListForPathPathParams;
    queryParams: BehaviorListForPathQueryParams;
}
export declare class BehaviorListForPathResponse extends SpeakeasyBase {
    behaviorEntities?: shared.BehaviorEntity[];
    contentType: string;
    statusCode: number;
}
