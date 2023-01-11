import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAutomationsQueryParams extends SpeakeasyBase {
    automation?: string;
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
export declare class GetAutomationsRequest extends SpeakeasyBase {
    queryParams: GetAutomationsQueryParams;
}
export declare class GetAutomationsResponse extends SpeakeasyBase {
    automationEntities?: shared.AutomationEntity[];
    contentType: string;
    statusCode: number;
}
