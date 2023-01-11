import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBehaviorsQueryParams extends SpeakeasyBase {
    behavior?: string;
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    perPage?: number;
    sortBy?: Record<string, any>;
}
export declare class GetBehaviorsRequest extends SpeakeasyBase {
    queryParams: GetBehaviorsQueryParams;
}
export declare class GetBehaviorsResponse extends SpeakeasyBase {
    behaviorEntities?: shared.BehaviorEntity[];
    contentType: string;
    statusCode: number;
}
